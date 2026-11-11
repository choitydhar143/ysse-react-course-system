import CourseCard from "./CourseCard";
import FilterSection from "./FilterSection";
import SearchBar from "./SearchBar";

function CourseSection({
  courses,
  totalCourses,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  sortOption,
  onSortChange,
  onReset
}) {
  const activeFilters = [];
  if (searchTerm.trim()) activeFilters.push(`Search: "${searchTerm.trim()}"`);
  if (selectedCategory !== "all") activeFilters.push(selectedCategory);
  if (selectedLevel !== "all") activeFilters.push(selectedLevel);
  if (sortOption !== "default") activeFilters.push(sortOption === "az" ? "A–Z" : "Z–A");

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">THE COURSE DIRECTORY</span>
            <h2>Find a skill worth<br /><span>building.</span></h2>
            <p>Explore the sample course collection. Use the filters to narrow down your options.</p>
          </div>
          <div className="section-side-note">
            <span className="note-number">01</span>
            <span>SEARCH<br />YOUR NEXT<br />LEARNING PATH</span>
          </div>
        </div>

        <div className="filter-panel" aria-label="Course search and filters">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <FilterSection
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            selectedLevel={selectedLevel}
            onLevelChange={onLevelChange}
            sortOption={sortOption}
            onSortChange={onSortChange}
            onReset={onReset}
          />
        </div>

        <div className="results-toolbar" aria-live="polite">
          <p id="activeFilters">{activeFilters.length ? activeFilters.join(" · ") : "Showing all courses"}</p>
          <p><strong>{courses.length}</strong> of {totalCourses} courses found</p>
        </div>

        {courses.length > 0 ? (
          <div className="course-grid" aria-live="polite">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <div className="empty-symbol" aria-hidden="true">⌕</div>
            <h3>No matching courses</h3>
            <p>No courses found. Try adjusting your search or filters.</p>
            <button className="button button-primary" type="button" onClick={onReset}>
              Clear all filters
            </button>
          </div>
        )}

        <p className="sample-note">
          Note: The courses shown here are sample entries created for this assignment, not a live YSSE course catalogue.
        </p>
      </div>
    </section>
  );
}

export default CourseSection;
