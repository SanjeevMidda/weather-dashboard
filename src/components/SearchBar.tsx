type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: InputProps) => {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Enter city name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default SearchBar;
