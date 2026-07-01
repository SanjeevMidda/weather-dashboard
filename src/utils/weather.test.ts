import {
  getWeatherDescription,
  formatTemperature,
  formatWindSpeed,
} from "./weather";

describe("Output weather description based on weather code", () => {
  test("returns Sunny - get those sunglasses!", () => {
    expect(getWeatherDescription(0)).toBe("Sunny - get those sunglasses!");
  });

  test("returns Partly cloudly - take a light jacket", () => {
    expect(getWeatherDescription(2)).toBe(
      "Partly cloudly - take a light jacket"
    );
  });

  test("return Unknown", () => {
    expect(getWeatherDescription(71)).toBe("Unknown");
  });
});

describe("formats temperature", () => {
  test("return 12°C", () => {
    expect(formatTemperature(12)).toBe("12°C");
  });

  test("return 31°C", () => {
    expect(formatTemperature(31)).toBe("31°C");
  });
});

describe("formats windspeed", () => {
  test("return 115 km/h", () => {
    expect(formatWindSpeed(115)).toBe("115 km/h");
  });
});
