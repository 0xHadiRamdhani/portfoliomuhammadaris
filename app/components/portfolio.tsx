"use client";

import { FormEvent, useState } from "react";
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
import profileImage from "../../assets/image.png";

function SectionLabel({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <span className={muted ? "label label-muted" : "label"}>{children}</span>;
}

function SectionIntro({
  label,
  title,
  description,
  muted = false,
}: {
  label: string;
  title: string;
  description?: string;
  muted?: boolean;
}) {
  return (
    <div className={description ? "center" : undefined}>
      <SectionLabel muted={muted}>{label}</SectionLabel>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
        <div className="card-links">
          <a href="#kontak">Buka demo ↗</a>
          <a href="#kontak">Repositori &lt;/&gt;</a>
        </div>
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
        <p className="kicker">{profile.kicker}</p>
        <h1>
          {profile.headline} <em>{profile.highlight}</em>
        </h1>
        <p className="hero-copy">{profile.description}</p>
        <div className="hero-actions">
          <a className="button primary" href="#proyek">
            Lihat portofolio proyek →
          </a>
          <a className="button secondary" href="#kontak">
            ↓ Unduh CV / Resume
          </a>
        </div>
        <div className="stats">
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
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
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
        <div className="portrait">
          <i />
          <Image className="portrait-image" src={profileImage} alt={profile.name} priority />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.location}</span>
          </div>
        </div>

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
