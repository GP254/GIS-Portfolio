import { useRevealOnScroll } from './useRevealOnScroll'

const portfolio = {
  profile: {
    name: 'Gurkirat Panesar',
    role: 'Geomatics Co-op Student | GIS & Data Analyst',
    location: 'Greater Toronto Area, Canada',
    email: 'g2panesa@uwaterloo.ca',
    github: 'https://github.com/GP254',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    resume: '/resume.pdf',
    headshot: '/images/headshot.jpg',
    about:
      'I am a Geomatics co-op student at the University of Waterloo focused on GIS analysis, web mapping, remote sensing, and spatial data automation. My work combines ArcGIS Pro, ArcGIS Online, Experience Builder, Python, SQL, and Google Earth Engine to turn spatial datasets into clear, usable tools for planning, research, and public access.',
    highlights: [
      'GIS analysis',
      'Remote sensing',
      'Web mapping',
      'Python automation',
      'Spatial SQL',
      'Cartography',
    ],
  },

  projects: [
    {
      title: 'GeoDetect AI',
      category: 'AI GIS',
      preview: '/images/projects/geodetect-ai.png',
      summary:
        'Browser-based GIS imagery search tool that uses free open-vocabulary AI detectors to find features in satellite and aerial imagery.',
      details:
        'Supports high-resolution imagery, GeoTIFF/TIFF uploads, tiled scanning with overlap controls, confidence-ranked detections, pan-and-zoom review, detection circles, and CSV or GeoJSON-style pixel polygon exports with GeoTIFF metadata when available.',
      stack: ['Transformers.js', 'OWL-ViT', 'OWLv2', 'GeoTIFF', 'Browser AI'],
      links: [
        {
          label: 'Live application',
          href: 'https://geodetectai.netlify.app/',
        },
      ],
    },
    {
      title: 'Sentinel-2 Snow Explorer and Analyzer',
      category: 'Remote Sensing',
      preview: '/images/projects/sentinel-2-snow-explorer.png',
      summary:
        'Google Earth Engine application for analyzing urban-rural snow persistence using Sentinel-2 imagery.',
      details:
        'Compares snow persistence across Thunder Bay, Sudbury, and Sault Ste. Marie using NDSI snow mapping, fractional snow cover, adaptive thresholding, land-cover analysis, terrain variables, and site verification workflows.',
      stack: ['Google Earth Engine', 'Sentinel-2', 'JavaScript', 'NDSI', 'Change Detection'],
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
      preview: '/images/projects/campus-map-redesign.png',
      summary:
        'Interactive Web GIS campus wayfinding application designed to improve navigation, accessibility, and spatial data usability.',
      details:
        'Built with ArcGIS Pro, ArcGIS Online, and ArcGIS Experience Builder. The application includes searchable buildings, amenities, accessibility layers, pedestrian routing, pop-ups, layer filtering, and responsive layouts.',
      stack: ['ArcGIS Pro', 'ArcGIS Online', 'Experience Builder', 'Wayfinding'],
      links: [
        {
          label: 'Live application',
          href: 'https://experience.arcgis.com/experience/26ccb76737db48548a7db31581b5c8d2?draft=true',
        },
      ],
    },
    {
      title: 'University of Waterloo - Campus Green Spaces and Green Roofs',
      category: 'GIS & Storytelling',
      preview: '/images/projects/campus-green-spaces.png',
      summary:
        'Story-based campus mapping project highlighting green spaces, rooftop gardens, and sustainability features.',
      details:
        'ArcGIS StoryMaps project using cartographic design and visual storytelling to document campus green spaces, rooftop gardens, and sustainability features.',
      stack: ['StoryMaps', 'Campus Mapping', 'Cartography', 'Visual Storytelling'],
      links: [
        {
          label: 'View story',
          href: 'https://storymaps.arcgis.com/stories/948c9bc00fbd4b41b1b201fd2124a4f9',
        },
      ],
    },
    {
      title: 'UofW Geospatial Centre Open Airphoto Collection App',
      category: 'Web Mapping',
      preview: '/images/projects/open-airphoto-collection.png',
      summary:
        'Downloadable airphoto dashboard for querying aerial photography by location and year across Waterloo, Kitchener, and Guelph.',
      details:
        'Public-facing airphoto access experience that helps users search and download aerial photography by year and municipality through an ArcGIS Experience Builder interface.',
      stack: ['ArcGIS Experience Builder', 'Dashboard UX', 'Airphotos', 'Search Design'],
      links: [
        {
          label: 'Live project',
          href: 'https://experience.arcgis.com/experience/b6571e82a3c74d8e9554abcc3acbd30f/',
        },
      ],
    },
  ],
}

function SpatialBackdrop() {
  return (
    <div className="space-backdrop" aria-hidden="true">
      <div className="star-field star-field-near" />
      <div className="star-field star-field-far" />

      <div className="orbit-system">
        <img className="globe-asset" src="/images/globe-orbit.png" alt="" draggable="false" />
        <div className="satellite-plane">
          <span className="satellite-ring" />
          <div className="satellite-orbit">
            <img className="satellite-asset" src="/images/satellite-orbit.png" alt="" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  useRevealOnScroll()

  return (
    <div className="site-shell">
      <SpatialBackdrop />

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#about" className="brand" aria-label="Go to About Me">
            <span className="brand-mark" aria-hidden="true">
              <img src="/images/globe-orbit.png" alt="" />
            </span>
            <span className="brand-text">Geospatial Portfolio</span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="section about-section reveal" data-reveal>
          <div className="container about-layout">
            <div className="header-reveal" data-header-reveal>
              <p className="eyebrow">{portfolio.profile.role}</p>
              <h1>{portfolio.profile.name}</h1>
              <p className="about-copy">{portfolio.profile.about}</p>

              <div className="about-actions">
                <a className="button button-primary" href={`mailto:${portfolio.profile.email}`}>
                  Email me
                </a>
                <a className="button button-ghost" href={portfolio.profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="button button-ghost" href={portfolio.profile.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <a className="scroll-cue" href="#projects" aria-label="Scroll down to projects">
                <span>Scroll down</span>
                <span className="scroll-cue-icon" aria-hidden="true" />
              </a>
            </div>

            <aside className="about-card card" aria-label="Profile details">
              <div className="headshot-wrap">
                <img
                  className="headshot"
                  src={portfolio.profile.headshot}
                  alt={`${portfolio.profile.name} headshot`}
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <div className="headshot-fallback" aria-hidden="true">
                  GP
                </div>
              </div>

              <p className="mini-heading">About Me</p>
              <dl className="profile-list">
                <div>
                  <dt>Location</dt>
                  <dd>{portfolio.profile.location}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${portfolio.profile.email}`}>{portfolio.profile.email}</a>
                  </dd>
                </div>
              </dl>

              <div className="tag-row">
                {portfolio.profile.highlights.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section section-soft reveal" data-reveal>
          <div className="container">
            <div className="section-header header-reveal" data-header-reveal>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-heading">Projects</h2>
            </div>

            <div className="project-grid">
              {portfolio.projects.map((project) => (
                <article key={project.title} className="project-card card">
                  <div className="project-preview-wrap">
                    <img
                      className="project-preview"
                      src={project.preview}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="project-body">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <p>{project.details}</p>

                    <div className="tag-row">
                      {project.stack.map((item) => (
                        <span className="tag tag-small" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a className="button button-ghost" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section reveal" data-reveal>
          <div className="container">
            <div className="section-header header-reveal" data-header-reveal>
              <p className="eyebrow">Current PDF</p>
              <h2 className="section-heading">Resume</h2>
            </div>

            <div className="resume-card card">
              <div className="resume-actions">
                <a className="button button-primary" href={portfolio.profile.resume} target="_blank" rel="noreferrer">
                  Open resume
                </a>
                <a className="button button-ghost" href={portfolio.profile.resume} download>
                  Download PDF
                </a>
              </div>

              <object className="resume-frame" data={portfolio.profile.resume} type="application/pdf">
                <p>
                  Your browser cannot display the PDF inline.{' '}
                  <a href={portfolio.profile.resume} target="_blank" rel="noreferrer">
                    Open the resume.
                  </a>
                </p>
              </object>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
