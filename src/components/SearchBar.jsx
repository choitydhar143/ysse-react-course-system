function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <label className="search-field">
      <span className="field-icon" aria-hidden="true">⌕</span>
      <span className="sr-only">Search courses by title or keyword</span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="What would you like to learn?"
        autoComplete="off"
        aria-label="Search courses by title or keyword"
      />
      <kbd aria-hidden="true">/</kbd>
    </label>
  );
}

export default SearchBar;
