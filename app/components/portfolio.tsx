"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  contact,
  footer,
  navigation,
  philosophy,
  profile,
  projects,
  skills,
  socialLinks,
  statistics,
  values,
} from "@/app/data/portfolio";
import profileImage from "../../assets/image.jpeg";

function SectionLabel({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <span className={muted ? "label label-muted" : "label"}>{children}</span>;
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[number];
  onOpen: (project: (typeof projects)[number]) => void;
}) {
  return (
    <article className="card" key={project.title}>
      <div className={`visual ${project.theme}`}>
        <span>{project.category}</span>
        <div className="visual-ui">
          <i />
          <i />
          <i />
          <b />
        </div>
      </div>
      <div className="card-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className="card-detail-button" type="button" onClick={() => onOpen(project)}>
          <span>Lihat detail proyek</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

function SkillCard({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <article className={`card skill ${skill.accent}`} key={skill.title}>
      <b className="skill-icon">{skill.icon}</b>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <div className="bars">
        {skill.levels.map((level) => (
          <div key={level.label}>
            <span>
              {level.label}
              <b>{level.value}%</b>
            </span>
            <i>
              <em style={{ width: `${level.value}%` }} />
            </i>
          </div>
        ))}
      </div>
    </article>
  );
}

function ValueCard({ value }: { value: (typeof values)[number] }) {
  return (
    <div key={value.title}>
      <b>{value.icon}</b>
      <strong>{value.title}</strong>
      <span>{value.description}</span>
    </div>
  );
}

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {contact.form.name}
        <input required name="name" placeholder={contact.form.namePlaceholder} />
      </label>
      <label>
        {contact.form.email}
        <input required name="email" type="email" placeholder={contact.form.emailPlaceholder} />
      </label>
      <label>
        {contact.form.message}
        <textarea required name="message" rows={4} placeholder={contact.form.messagePlaceholder} />
      </label>
      <button className="button primary" type="submit">
        {contact.cta}
      </button>
      {isSent ? (
        <p className="success" role="status">
          {contact.successMessage}
        </p>
      ) : null}
    </form>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const projectDialogRef = useRef<HTMLDialogElement>(null);
  const projectCategories = ["Semua", ...new Set(projects.map((project) => project.category))];
  const visibleProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const dialog = projectDialogRef.current;
    if (selectedProject && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedProject]);

  return (
    <main>
      <div className="background-grid" />
      <header className="site-header">
        <a className="brand" href="#beranda">
          <b>&gt;_</b>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Buka navigasi"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <nav className={isMenuOpen ? "nav open" : "nav"}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#kontak">
          Hubungi Saya
        </a>
      </header>

      <section id="beranda" className="hero section">
        <div className="hero-content">
          <div className="hero-copy-block">
            <p className="kicker"><span />{profile.kicker} · Jakarta, Indonesia</p>
            <h1>{profile.highlight}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-statement">{profile.headline}</p>
            <p className="hero-copy">{profile.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyek">
                Jelajahi proyek <span aria-hidden="true">↘</span>
              </a>
              <a className="button secondary" href="#kontak">
                Hubungi saya <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-orbit" />
            <Image className="hero-portrait-image" src={profileImage} alt={profile.name} priority />
            <div className="portrait-caption">
              <span>Systems / Creative Tech</span>
              <span>Portfolio / 2026</span>
            </div>
          </div>
        </div>
        <div className="stats" aria-label="Ringkasan pengalaman">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <b>{statistic.value}</b>
              <span>{statistic.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section philosophy">
        <div className="phi">◇</div>
        <div>
          <SectionLabel>{philosophy.label}</SectionLabel>
          <h2>{philosophy.title}</h2>
          <p>{philosophy.description}</p>
        </div>
        <div className="metrics">
          {philosophy.metrics.map((metric) => (
            <div key={metric.label}>
              <small>{metric.label}</small>
              <b>{metric.value}</b>
            </div>
          ))}
        </div>
      </section>

      <section id="proyek" className="section section-space">
        <div className="section-head">
          <div>
            <SectionLabel>Karya Pilihan</SectionLabel>
            <h2>Proyek unggulan sistem &amp; web</h2>
          </div>
          <p>
            Eksplorasi arsitektur komputasi awan, visualisasi data real-time, dan sistem desain untuk platform modern.
          </p>
        </div>
        <div className="project-browser">
          <div className="project-filters" role="group" aria-label="Filter kategori proyek">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "project-filter active" : "project-filter"}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="project-count" aria-live="polite">
            {visibleProjects.length} proyek ditampilkan
          </p>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
        <dialog
          ref={projectDialogRef}
          className="project-dialog"
          aria-labelledby="project-dialog-title"
          onClose={() => setSelectedProject(null)}
          onCancel={(event) => {
            event.preventDefault();
            projectDialogRef.current?.close();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              projectDialogRef.current?.close();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
        >
          {selectedProject ? (
            <div className="project-dialog-copy">
              <div className="project-dialog-header">
                <div>
                  <p className="project-dialog-category">{selectedProject.category}</p>
                  <h2 id="project-dialog-title">{selectedProject.title}</h2>
                </div>
                <button
                  className="project-dialog-close"
                  type="button"
                  aria-label="Tutup detail proyek"
                  onClick={() => projectDialogRef.current?.close()}
                >
                  ×
                </button>
              </div>
              <p className="project-dialog-description">{selectedProject.description}</p>
              <div className="project-dialog-stack">
                <h3>Teknologi</h3>
                <div className="tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </dialog>
      </section>

      <section id="keterampilan" className="section section-space">
        <div className="center">
          <SectionLabel muted>Matriks Keahlian</SectionLabel>
          <h2>Teknologi &amp; kompetensi inti</h2>
          <p>
            Kombinasi keahlian frontend interaktif, rekayasa backend tangguh, dan otomatisasi infrastruktur awan.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      <section id="tentang" className="section about section-space">
        <div>
          <SectionLabel>Mengenal Lebih Dekat</SectionLabel>
          <h2>Menggabungkan rekayasa sistem dengan cita rasa desain</h2>
          <p>{profile.shortBio}</p>
          <p>{profile.longerBio}</p>
          <div className="values">
            {values.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </div>
        <div className="about-note">
          <span>Lokasi saat ini</span>
          <strong>{profile.location}</strong>
          <i aria-hidden="true">↗</i>
        </div>
      </section>

      <section id="kontak" className="section contact">
        <div>
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.heading}</h2>
          <p>{contact.description}</p>
          <div className="details">
            ✉ <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <br />
            ◷ Maksimal 24 jam kerja
          </div>
        </div>
        <ContactForm />
      </section>

      <footer>
        <div>
          <strong>
            <i /> {footer.title}
          </strong>
          <p>{footer.description}</p>
        </div>
        <div className="socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
        <small>{footer.copyright}</small>
      </footer>
    </main>
  );
}
