import { useEffect, useMemo, useRef, useState } from 'react'
import { useRevealOnScroll } from './useRevealOnScroll'

const portfolio = {
  profile: {
    name: 'Gurkirat Panesar',
    role: 'GIS & Data Analyst | Spatial Analytics | ArcGIS Pro | Python (ArcPy, Pandas) | SQL | Remote Sensing',
    intro:
        'Geomatics co-op student at the University of Waterloo building production-grade GIS workflows for municipal planning, geocoding automation, and remote sensing analysis. Focused on converting spatial datasets into decision-ready outputs through Python automation, spatial SQL, and web GIS delivery.',
    location: 'Greater Toronto Area, Canada',
    email: 'g2panesa@uwaterloo.ca',
    github: 'https://github.com/GP254',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    resume: '/resume.pdf',
    aboutImage: 'https://picsum.photos/seed/geoport-about/720/420',
  },

  stats: [
    { value: '8+', label: 'portfolio projects' },
    { value: '4', label: 'core disciplines' },
    { value: '0', label: 'ArcGIS account needed' },
  ],

  strengths: [
    'GIS Analysis',
    'Remote Sensing',
    'Web Mapping',
    'Python Automation',
    'Spatial SQL',
    'Geocoding Automation',
    'Enterprise GIS QA',
    'Cartography',
    'Data Visualization',
    'ArcGIS + QGIS',
  ],

  skillGroups: [
    {
      title: 'GIS & spatial',
      symbol: 'gis',
      items: ['ArcGIS Pro', 'ArcGIS Online', 'QGIS', 'Experience Builder', 'ArcPy', 'Spatial analysis'],
    },
    {
      title: 'Programming & data',
      symbol: 'code',
      items: ['Python', 'SQL', 'Jupyter', 'Pandas', 'NumPy', 'PostgreSQL'],
    },
    {
      title: 'Remote sensing & visualization',
      symbol: 'remote',
      items: ['Google Earth Engine', 'Cartography', 'StoryMaps', 'Dashboard design', 'Data storytelling'],
    },
    {
      title: 'Web & delivery',
      symbol: 'web',
      items: ['React', 'Vite', 'JavaScript', 'HTML/CSS', 'GitHub Pages', 'Netlify'],
    },
  ],

  experience: [
    {
      title: 'GIS Technician',
      org: 'Peel Region',
      period: 'May 2025 - Aug 2025',
      bullets: [
        'Contributed to building permits automation, delivering Q1 workflows and supporting Q2 development in an enterprise GIS environment.',
        'Troubleshot ArcMap ModelBuilder workflows, resolving field-mapping defects and truncation issues in large municipal permit datasets.',
        'Enhanced ArcGIS Pro geocoding scripts by refining address input logic, locator tuning, and rematch behavior for improved reliability.',
        'Built Python automation for PeelDB Archaeological Sites updates and integrated external API JSON data into feature classes with ward-level spatial joins.',
      ],
    },
    {
      title: 'GIS Library Associate',
      org: 'University of Waterloo Geospatial Centre',
      period: 'Sep 2024 - Dec 2024',
      bullets: [
        'Built an ArcGIS Experience Builder Air Photo Dashboard for high-volume photo search and download by year and municipality.',
        'Created the Geospatial Centre Open Data Portal in ArcGIS Hub to streamline dataset and airphoto distribution workflows.',
        'Processed and linked ~3 million Teranet property records with PostgreSQL and ArcPy for municipality-level spatial analysis.',
        'Developed campus mapping products, including a paths network dataset and a StoryMap-based greenspace tour.',
      ],
    },
    {
      title: 'Data Analytics Technician',
      org: 'Regional Municipality of York',
      period: 'Jan 2024 - Apr 2024',
      bullets: [
        'Executed multi-criteria geospatial analysis for affordable housing redevelopment on provincially owned lands.',
        'Produced Official Plan mapping outputs and Yellow Belt interactive maps using ArcGIS Pro and ArcGIS Online.',
        'Supported AGOL urban models, georeferencing workflows, and multi-layer feature class delivery for planning teams.',
        'Maintained spatial data integrity in MS SQL Server geodatabases through targeted QA and issue resolution.',
      ],
    },
    {
      title: 'Jr. QA Developer',
      org: 'MCAP Financial Corporation',
      period: 'Jan 2022 - Apr 2022',
      bullets: [
        'Maintained automated Cypress test suites and supported release quality across Agile product teams.',
        'Ran API and performance validation workflows with Postman and JMeter.',
        'Managed MySQL-backed test datasets and structured QA data pipelines for mortgage platform testing.',
      ],
    },
  ],

  projects: [
    {
      title: 'Sentinel-2 Snow Explorer and Analyzer',
      category: 'Remote Sensing',
      featured: true,
      preview: 'https://picsum.photos/seed/geoport-snow/800/450',
      summary:
          'Google Earth Engine application for analyzing urban-rural snow persistence using Sentinel-2 imagery.',
      details:
          'Interactive remote sensing capstone project comparing snow persistence across Thunder Bay, Sudbury, and Sault Ste. Marie. The app applies NDSI snow mapping, fractional snow cover, adaptive thresholding, change detection, land-cover analysis, terrain variables, and site verification workflows.',
      stack: [
        'Google Earth Engine',
        'Sentinel-2',
        'JavaScript',
        'NDSI',
        'Fractional Snow Cover',
        'ESA WorldCover',
        'Change Detection',
      ],
      links: [
        {
          label: 'Live application',
          href: 'https://gurkiratpanesar4.users.earthengine.app/view/sse',
        },
      ],
    },
    {
      title: 'University of Waterloo Campus Map Redesign',
      category: 'Web GIS',
      featured: true,
      preview: 'https://picsum.photos/seed/geoport-campus-map/800/450',
      summary:
          'Interactive Web GIS campus wayfinding application designed to improve navigation, accessibility, and spatial data usability.',
      details:
          'GIS capstone project built with ArcGIS Pro, ArcGIS Online, and ArcGIS Experience Builder. The application includes searchable buildings, amenities, accessibility layers, pedestrian routing, pop-ups, layer filtering, and responsive desktop/mobile interface layouts.',
      stack: [
        'ArcGIS Pro',
        'ArcGIS Online',
        'Experience Builder',
        'Web GIS',
        'Wayfinding',
        'Accessibility Mapping',
        'Cartographic Design',
      ],
      links: [
        {
          label: 'Live application',
          href: 'https://experience.arcgis.com/experience/26ccb76737db48548a7db31581b5c8d2?draft=true',
        },
      ],
    },
    {
      title: 'UofW Geospatial Centre Open Airphoto Collection App',
      category: 'Web Mapping',
      featured: true,
      preview: 'https://picsum.photos/seed/geoport-airphoto/800/450',
      summary:
          'Downloadable airphoto dashboard for querying aerial photography by location and year.',
      details:
          'Public-facing airphoto access experience that allows users to search and download aerial photography by year and municipality. This portfolio keeps the project as an outbound link while making the portfolio itself independent from ArcGIS hosting.',
      stack: ['ArcGIS Experience Builder', 'Dashboard UX', 'Airphotos', 'Search Design'],
      links: [
        {
          label: 'Live project',
          href: 'https://experience.arcgis.com/experience/b6571e82a3c74d8e9554abcc3acbd30f/',
        },
      ],
    },
    {
      title: 'University of Waterloo - Campus Green Spaces and Green Roofs',
      category: 'GIS & Storytelling',
      featured: true,
      preview: 'https://picsum.photos/seed/geoport-campus/800/450',
      summary:
          'Story-based campus mapping project highlighting green spaces, rooftop gardens, and sustainability features.',
      details:
          'Campus sustainability mapping project presented through ArcGIS StoryMaps. The project highlights green spaces, rooftop gardens, and campus sustainability features using cartographic design and visual storytelling.',
      stack: ['StoryMaps', 'Campus Mapping', 'Cartography', 'Visual Storytelling'],
      links: [
        {
          label: 'View story',
          href: 'https://storymaps.arcgis.com/stories/948c9bc00fbd4b41b1b201fd2124a4f9',
        },
      ],
    },
    {
      title: 'Geospatial Centre Data Portal',
      category: 'Web GIS',
      featured: true,
      preview: 'https://picsum.photos/seed/geoport-hub/800/450',
      summary:
          'Open data portal supporting data discovery, download, and service access in multiple geospatial formats.',
      details:
          'ArcGIS Hub portal supporting spatial data distribution, metadata access, and open data discovery. The portal improves access to geospatial datasets, airphotos, and GIS services through a centralized web interface.',
      stack: ['ArcGIS Hub', 'Open Data', 'Metadata', 'Data Delivery', 'Spatial Data Infrastructure'],
      links: [
        {
          label: 'Open portal',
          href: 'https://university-of-waterloo-geospatial-centre-open-data-geouw.hub.arcgis.com/',
        },
      ],
    },
  ],
}

const categories = ['All', ...new Set(portfolio.projects.map((project) => project.category))]
const GLOBE_POINT_COUNT = 400

function EmployerCubePlaceholder() {
  return (
      <div className="employer-cube" aria-hidden="true">
        <svg className="employer-cube-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path className="employer-cube-face employer-cube-top" d="M32 8 L52 22 L32 36 L12 22 Z" />
          <path className="employer-cube-face employer-cube-left" d="M12 22 L32 36 L32 56 L12 42 Z" />
          <path className="employer-cube-face employer-cube-right" d="M32 36 L52 22 L52 42 L32 56 Z" />
        </svg>
      </div>
  )
}

const skillSymbolPaths = {
  gis: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
  ),
  code: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
  ),
  remote: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M5.6 18.4l2.1-2.1" />
        <circle cx="12" cy="12" r="8" fill="none" opacity="0.35" />
      </>
  ),
  web: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
  ),
}

function SkillGroupSymbol({ symbol }) {
  const inner = skillSymbolPaths[symbol]

  if (!inner) return null

  return (
      <div className="skill-group-symbol" aria-hidden="true">
        <svg className="skill-group-symbol-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {inner}
        </svg>
      </div>
  )
}

function buildSpherePoints(count) {
  const points = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1)
    const y = 1 - t * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i
    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius

    points.push({
      x: x.toFixed(4),
      y: y.toFixed(4),
      z: z.toFixed(4),
      alpha: (0.35 + (z + 1) * 0.28).toFixed(3),
      size: (1.2 + (z + 1) * 1.1).toFixed(2),
    })
  }

  return points
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(portfolio.projects[0])
  const globeRef = useRef(null)

  useRevealOnScroll()

  const filteredProjects = useMemo(() => {
    return portfolio.projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory
      const searchBlob = `${project.title} ${project.summary} ${project.details} ${project.stack.join(' ')}`.toLowerCase()
      const matchesQuery = searchBlob.includes(query.toLowerCase().trim())

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const globePoints = useMemo(() => buildSpherePoints(GLOBE_POINT_COUNT), [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false)
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const el = globeRef.current

    if (!el) return

    let ticking = false

    const onScroll = () => {
      if (ticking) return

      ticking = true

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const rot = Math.min(y * 0.18, 220)
        const tilt = 14 + Math.min(y * 0.015, 10)

        el.style.transform = `perspective(980px) rotateX(${tilt}deg) rotateY(${rot}deg)`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
      <div className="site-shell">
        <header className="topbar">
          <div className="container topbar-inner">
            <a href="#home" className="brand" aria-label="Go to top">
              GP
            </a>

            <nav className="nav desktop-nav">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="topbar-actions">
              <a className="button button-ghost" href={portfolio.profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <button
                  className="menu-toggle"
                  onClick={() => setMenuOpen((value) => !value)}
                  aria-label="Open navigation"
                  aria-expanded={menuOpen}
                  type="button"
              >
                ☰
              </button>
            </div>
          </div>

          {menuOpen && (
              <div className="mobile-panel">
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
          )}
        </header>

        <main id="home">
          <section className="hero section">
            <div className="container hero-layout">
              <div>
                <p className="eyebrow">{portfolio.profile.role}</p>
                <h1>{portfolio.profile.name}</h1>
                <p className="hero-copy">{portfolio.profile.intro}</p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">
                    Explore projects
                  </a>
                  <a className="button button-ghost" href={portfolio.profile.resume}>
                    View resume
                  </a>
                </div>

                <div className="hero-tags">
                  {portfolio.strengths.map((item) => (
                      <span key={item} className="tag">
                    {item}
                  </span>
                  ))}
                </div>
              </div>

              <aside className="hero-visual" aria-hidden="true">
                <div className="globe-stage">
                  <div ref={globeRef} className="globe globe-points">
                    {globePoints.map((point, index) => (
                        <span
                            key={`${point.x}-${point.y}-${point.z}-${index}`}
                            className="globe-point"
                            style={{
                              '--x': point.x,
                              '--y': point.y,
                              '--z': point.z,
                              '--alpha': point.alpha,
                              '--size': `${point.size}px`,
                            }}
                        />
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section id="about" className="section reveal" data-reveal>
            <div className="container split-layout">
              <div className="about-column">
                <h2 className="section-heading">About</h2>
                <div className="about-preview-wrap">
                  <img className="about-preview" src={portfolio.profile.aboutImage} alt="" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="content-stack">
                <p>
                  The portfolio is structured around GIS analysis projects, digital cartography outputs, and interactive
                  web maps. This React implementation preserves that taxonomy while converting the experience into a
                  standard web application deployable on GitHub Pages, Netlify, or Vercel without a university ArcGIS
                  dependency for core site hosting.
                </p>
                <p>
                  Content is managed through editable JavaScript objects, enabling low-friction updates to project links,
                  technical summaries, media assets, and resume integration without redesigning the full interface layer.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="section section-soft reveal" data-reveal>
            <div className="container">
              <h2 className="section-heading">Experience</h2>

              <div className="timeline">
                {portfolio.experience.map((item) => (
                    <article key={`${item.title}-${item.org}`} className="timeline-card card">
                      <div className="timeline-top">
                        <div className="timeline-title-row">
                          <EmployerCubePlaceholder />
                          <div className="timeline-title-text">
                            <h3>{item.title}</h3>
                            <p className="timeline-org">{item.org}</p>
                          </div>
                        </div>
                        <span className="timeline-period">{item.period}</span>
                      </div>

                      <ul>
                        {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="section reveal" data-reveal>
            <div className="container">
              <div className="section-header projects-head">
                <div>
                  <h2 className="section-heading">Projects</h2>
                </div>

                <div className="project-toolbar">
                  <input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search projects"
                      aria-label="Search projects"
                  />

                  <div className="filter-row">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`chip ${activeCategory === category ? 'chip-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                            type="button"
                        >
                          {category}
                        </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projects-layout">
                <div className="project-grid">
                  {filteredProjects.map((project) => (
                      <article
                          key={project.title}
                          className={`project-card card ${
                              selectedProject.title === project.title ? 'project-card-active' : ''
                          }`}
                          onMouseEnter={() => setSelectedProject(project)}
                          onFocus={() => setSelectedProject(project)}
                      >
                        <div className="project-preview-wrap">
                          <img
                              className="project-preview"
                              src={project.preview}
                              alt=""
                              loading="lazy"
                              decoding="async"
                          />
                        </div>

                        <div className="project-body">
                          <div className="project-accent" aria-hidden="true" />
                          <div className="project-content">
                            <div className="project-meta">
                              <span className="project-category">{project.category}</span>
                              {project.featured && <span className="project-featured">Featured</span>}
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>

                            <div className="tag-row">
                              {project.stack.map((item) => (
                                  <span className="tag tag-small" key={item}>
                              {item}
                            </span>
                              ))}
                            </div>

                            <div className="project-links-inline">
                              {project.links.map((link) => (
                                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                    {link.label}
                                  </a>
                              ))}

                              {project.links.length === 0 && (
                                  <span className="muted">Add screenshots or a case-study page here</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                  ))}
                </div>

                <aside className="project-spotlight card">
                  <div className="spotlight-preview-wrap">
                    <img
                        key={selectedProject.title}
                        className="spotlight-preview"
                        src={selectedProject.preview}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                  </div>

                  <div className="project-spotlight-inner">
                    <p className="mini-heading">Selected project</p>
                    <h3>{selectedProject.title}</h3>
                    <p className="spotlight-category">{selectedProject.category}</p>
                    <p className="spotlight-copy">{selectedProject.details}</p>

                    <div className="tag-row">
                      {selectedProject.stack.map((item) => (
                          <span className="tag" key={item}>
                        {item}
                      </span>
                      ))}
                    </div>

                    <div className="spotlight-actions">
                      {selectedProject.links.map((link) => (
                          <a
                              className="button button-primary"
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                          >
                            {link.label}
                          </a>
                      ))}

                      {selectedProject.links.length === 0 && (
                          <a className="button button-ghost" href="#contact">
                            Add media later
                          </a>
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section id="skills" className="section section-soft reveal" data-reveal>
            <div className="container">
              <div className="section-header">
                <h2 className="section-heading">Skills</h2>
              </div>

              <div className="skill-grid">
                {portfolio.skillGroups.map((group) => (
                    <article key={group.title} className="skill-card card">
                      <div className="skill-card-head">
                        <SkillGroupSymbol symbol={group.symbol} />
                        <h3>{group.title}</h3>
                      </div>

                      <ul className="skill-list">
                        {group.items.map((item) => (
                            <li key={item}>
                              <span className="skill-list-marker" aria-hidden="true" />
                              {item}
                            </li>
                        ))}
                      </ul>
                    </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section reveal" data-reveal>
            <div className="container callout card">
              <div>
                <p className="section-label">Next iteration backlog</p>
                <h2>Resume endpoint, media assets, and concise technical case studies</h2>
                <p>
                  The application shell is ready for production content. After publishing your resume asset and replacing
                  the placeholder path, expand each project with 2 to 4 lines covering problem framing, implementation
                  approach, toolchain, and measurable outcomes.
                </p>
              </div>

              <div className="callout-actions">
                <a className="button button-primary" href={portfolio.profile.github} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
                <a className="button button-ghost" href={`mailto:${portfolio.profile.email}`}>
                  Contact button
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="footer reveal" data-reveal>
          <div className="container footer-inner">
            <div>
              <h3>{portfolio.profile.name}</h3>
              <p>{portfolio.profile.location}</p>
            </div>

            <div className="footer-links">
              <a href={`mailto:${portfolio.profile.email}`}>Email</a>
              <a href={portfolio.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={portfolio.profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={portfolio.profile.resume}>Resume</a>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App