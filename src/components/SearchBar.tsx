type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
};

const SearchBar = ({ value, onChange, onSearch }: InputProps) => {
  // const handleSubmit = () => {
  //   onSearch(value);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearch(value);
  };

  return (
    <form className="inputContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" disabled={!value.trim()}>
        Get Weather
      </button>
    </form>
  );
};

export default SearchBar;
