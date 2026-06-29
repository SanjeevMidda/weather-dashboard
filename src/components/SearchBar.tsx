type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
};

const SearchBar = ({ value, onChange, onSearch }: InputProps) => {
  const handleSubmit = () => {
    onSearch(value);
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={handleSubmit}>Get Weather</button>
    </div>
  );
};

export default SearchBar;
