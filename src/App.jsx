import { useMemo, useState } from "react";
import coursesData from "./data/courses";
import CourseSection from "./components/CourseSection";

function App() {
  // State controls the search field and all filters.
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [menuOpen, setMenuOpen] = useState(false);

  // Search and filters are combined: a course must match every active condition.
  const visibleCourses = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    let result = coursesData.filter((course) => {
      const searchableContent =
        `${course.title} ${course.description} ${course.category} ${course.level}`.toLowerCase();

      const matchesSearch = searchableContent.includes(keyword);
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });

    if (sortOption === "az") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "za") {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [searchTerm, selectedCategory, selectedLevel, sortOption]);

  function resetFilters() {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSortOption("default");
  }

  function selectFooterCategory(category) {
    setSelectedCategory(category);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="YSSE Stage of Innovation home" onClick={closeMenu}>
            <img src="/images/ysse-official-logo.png" alt="YSSE official logo" className="brand-logo" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span /><span /><span />
          </button>

          <nav className={`main-nav ${menuOpen ? "open" : ""}`} id="mainNav" aria-label="Main navigation">
            <a href="#home" className="nav-link active" onClick={closeMenu}>Home</a>
            <a href="#courses" className="nav-link" onClick={closeMenu}>Courses</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="header-cta" href="#courses" onClick={closeMenu}>Explore courses <span>↗</span></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> YOUTH SCHOOL FOR SOCIAL ENTREPRENEURS</div>
              <p className="hero-kicker">A space to learn, explore and grow</p>
              <h1>Turn your curiosity<br />into <span>capability.</span></h1>
              <p className="hero-description">
                Explore learning opportunities inspired by YSSE’s focus on youth empowerment,
                social entrepreneurship, skill development and positive community change.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#courses">Explore courses <span>↗</span></a>
                <a className="text-link" href="#about">Discover YSSE <span>→</span></a>
              </div>
              <div className="hero-proof">
                <div><strong>08<span>+</span></strong><small>Sample courses</small></div>
                <div className="proof-divider" />
                <div><strong>03</strong><small>Learning levels</small></div>
                <div className="proof-divider" />
                <div><strong>05</strong><small>Skill categories</small></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Young people learning and collaborating">
              <div className="photo-frame">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=90"
                  alt="Young professionals collaborating around a table"
                  loading="eager"
                />
                <div className="photo-overlay" />
                <div className="photo-caption">
                  <span className="caption-kicker">STAGE OF INNOVATION</span>
                  <strong>Ideas become<br />meaningful action.</strong>
                  <span className="caption-line" />
                  <small>LEARN · CONNECT · CREATE IMPACT</small>
                </div>
              </div>
              <div className="floating-note"><span>✳</span><div><b>Learn together</b><small>Grow with purpose</small></div></div>
              <div className="photo-index">YSSE / 01</div>
            </div>
          </div>
          <div className="hero-bottom-shape" />
        </section>

        <section className="intro-strip" id="about">
          <div className="container intro-inner">
            <div className="intro-mark">YSSE <span>—</span> STAGE OF INNOVATION</div>
            <p>Learning is a starting point. <strong>Positive change is the goal.</strong></p>
            <a href="https://ysseglobal.org/" target="_blank" rel="noopener noreferrer">Visit official website ↗</a>
          </div>
        </section>

        <CourseSection
          courses={visibleCourses}
          totalCourses={coursesData.length}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onReset={resetFilters}
        />

        <section className="about-band">
          <div className="container about-band-inner">
            <div className="about-icon">✳</div>
            <div>
              <span className="section-eyebrow">LEARN WITH PURPOSE</span>
              <h2>Skills open doors.<br /><span>Ideas create impact.</span></h2>
            </div>
            <p>This course explorer is a front-end learning project built to make course discovery simple, clear and accessible across devices.</p>
            <a href="#courses" className="about-cta">Explore the directory ↗</a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#home">
              <img src="/images/ysse-official-logo.png" alt="YSSE official logo" />
            </a>
            <p>A course discovery interface created as a Week 5 web development assignment for the YSSE learning portal concept.</p>
            <a className="footer-site-link" href="https://ysseglobal.org/" target="_blank" rel="noopener noreferrer">Official YSSE website ↗</a>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#courses">All courses</a>
            <a href="#about">About this project</a>
          </div>

          <div className="footer-column">
            <h3>Course categories</h3>
            {["Web Development", "Programming", "Graphic Design", "Digital Marketing", "Data Science"].map((category) => (
              <a
                href="#courses"
                key={category}
                onClick={() => selectFooterCategory(category)}
              >
                {category}
              </a>
            ))}
          </div>

          <div className="footer-column contact-column">
            <h3>Contact YSSE</h3>
            <a href="mailto:ysseglobal@gmail.com">ysseglobal@gmail.com</a>
            <a href="tel:+8801713143739">+880 1713-143739</a>
            <a href="https://www.facebook.com/YSSEGlobal" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
            <span className="contact-note">For official enquiries, please use YSSE's published contact channels.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 YSSE Course Explorer · React Week 6 Project</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
