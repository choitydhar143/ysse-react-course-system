function FilterSection({
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  sortOption,
  onSortChange,
  onReset
}) {
  // A fragment keeps each control as a direct grid child of .filter-panel.
  return (
    <>
      <label className="filter-field">
        <span className="filter-label">CATEGORY</span>
        <select value={selectedCategory} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="all">All categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Data Science">Data Science</option>
        </select>
      </label>

      <label className="filter-field">
        <span className="filter-label">DIFFICULTY</span>
        <select value={selectedLevel} onChange={(event) => onLevelChange(event.target.value)}>
          <option value="all">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>

      <label className="filter-field sort-field">
        <span className="filter-label">SORT BY</span>
        <select value={sortOption} onChange={(event) => onSortChange(event.target.value)}>
          <option value="default">Recommended</option>
          <option value="az">Title: A to Z</option>
          <option value="za">Title: Z to A</option>
        </select>
      </label>

      <button className="reset-button" type="button" onClick={onReset}>
        Reset <span aria-hidden="true">↺</span>
      </button>
    </>
  );
}

export default FilterSection;
