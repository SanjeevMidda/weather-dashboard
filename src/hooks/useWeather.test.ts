import { renderHook, act } from "@testing-library/react";
import useWeather from "./useWeather";
import { getWeather } from "../services/weatherService";

jest.mock("../services/weatherService", () => ({
  getWeather: jest.fn(),
}));

describe("useWeather hook", () => {
  test("starts with initial loading state", () => {
    const { result } = renderHook(() => useWeather());

    expect(result.current.loadingState).toBe("initial");
    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBeNull();
  });

  test("returns weather data after successful request", async () => {
    (getWeather as jest.Mock).mockResolvedValue({
      temperature: 20,
      windSpeed: 15,
      relativeHumidity: 60,
      weatherCode: 0,
    });

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchWeather("London");
    });

    expect(result.current.loadingState).toBe("successful");

    expect(result.current.weather).toEqual({
      temperature: 20,
      windSpeed: 15,
      relativeHumidity: 60,
      weatherCode: 0,
    });

    expect(result.current.error).toBeNull();
  });

  test("handles API errors correctly", async () => {
    (getWeather as jest.Mock).mockRejectedValue(
      new Error("Unable to fetch weather data.")
    );

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.fetchWeather("London");
    });

    expect(result.current.loadingState).toBe("error");

    expect(result.current.error).toBe("Unable to fetch weather data.");

    expect(result.current.weather).toBeNull();
  });
});
