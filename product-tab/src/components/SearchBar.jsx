export const SearchBar = ({ filterText, onFilterTextChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e)}
        placeholder="Search..."
      />
      <label>
        <input type="checkbox" /> Only show products in stock
        {console.log("filterText")}
        {console.log(filterText)}
      </label>
    </form>
  );
};
