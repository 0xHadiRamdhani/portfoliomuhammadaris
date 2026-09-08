"use client";

import { FormEvent, useState } from "react";
import { navigation, projects, skills, statistics, values } from "@/app/data/portfolio";

function SectionLabel({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <span className={muted ? "label label-muted" : "label"}>{children}</span>;
}

function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSent(true);
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>Nama lengkap<input required name="name" placeholder="misal: Raden Mas Danu" /></label>
    <label>Alamat email<input required name="email" type="email" placeholder="nama@perusahaan.com" /></label>
    <label>Pesan atau rencana proyek<textarea required name="message" rows={4} placeholder="Ceritakan secara ringkas mengenai kebutuhan Anda..." /></label>
    <button className="button primary" type="submit">Kirim pesan sekarang →</button>
    {isSent && <p className="success" role="status">Pesan berhasil dicatat. Muhammad Aris akan segera membalas.</p>}
  </form>;
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <main>
    <div className="background-grid" />
    <header className="site-header">
      <a className="brand" href="#beranda"><b>&gt;_</b><span><strong>Muhammad Aris</strong><small>Systems &amp; Creative Tech</small></span></a>
      <button className="menu-button" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Buka navigasi">{isMenuOpen ? "×" : "☰"}</button>
      <nav className={isMenuOpen ? "nav open" : "nav"}>{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}</nav>
      <a className="header-cta" href="#kontak">Hubungi Saya</a>
    </header>

    <section id="beranda" className="hero section">
      <span className="eyebrow"><i /> Terbuka untuk kolaborasi &amp; proyek baru</span>
      <p className="kicker">Portfolio / 2026</p>
      <h1>Merancang arsitektur &amp; pengalaman digital bersama <em>Muhammad Aris</em></h1>
      <p className="hero-copy">Full-Stack Developer &amp; Creative Technologist yang merancang pengalaman digital berkinerja tinggi, elegan, dan berdampak nyata.</p>
      <div className="hero-actions"><a className="button primary" href="#proyek">Lihat portofolio proyek →</a><a className="button secondary" href="#kontak">↓ Unduh CV / Resume</a></div>
      <div className="stats">{statistics.map((statistic) => <div key={statistic.label}><b>{statistic.value}</b><span>{statistic.label}</span></div>)}</div>
    </section>

    <section className="section philosophy"><div className="phi">◇</div><div><SectionLabel>Filosofi Rekayasa</SectionLabel><h2>Kinerja tanpa kompromi &amp; desain presisi</h2><p>Setiap baris kode dan komponen UI dirancang untuk kecepatan respons, arsitektur yang scalable, dan estetika digital mutakhir.</p></div><div className="metrics"><div><small>Rata-rata waktu akses</small><b>&lt; 120ms</b></div><div><small>Uptime layanan</small><b>99.98%</b></div></div></section>

    <section id="proyek" className="section section-space"><div className="section-head"><div><SectionLabel>Karya Pilihan</SectionLabel><h2>Proyek unggulan sistem &amp; web</h2></div><p>Eksplorasi arsitektur komputasi awan, visualisasi data real-time, dan sistem desain untuk platform modern.</p></div><div className="project-grid">{projects.map((project) => <article className="card" key={project.title}><div className={`visual ${project.theme}`}><span>{project.category}</span><div className="visual-ui"><i /><i /><i /><b /></div></div><div className="card-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="card-links"><a href="#kontak">Buka demo ↗</a><a href="#kontak">Repositori &lt;/&gt;</a></div></div></article>)}</div></section>

    <section id="keterampilan" className="section section-space"><div className="center"><SectionLabel muted>Matriks Keahlian</SectionLabel><h2>Teknologi &amp; kompetensi inti</h2><p>Kombinasi keahlian frontend interaktif, rekayasa backend tangguh, dan otomatisasi infrastruktur awan.</p></div><div className="skill-grid">{skills.map((skill) => <article className={`card skill ${skill.accent}`} key={skill.title}><b className="skill-icon">{skill.icon}</b><h3>{skill.title}</h3><p>{skill.description}</p><div className="bars">{skill.levels.map((level) => <div key={level.label}><span>{level.label}<b>{level.value}%</b></span><i><em style={{ width: `${level.value}%` }} /></i></div>)}</div></article>)}</div></section>

    <section id="tentang" className="section about section-space"><div className="portrait"><i /><b>MA</b><div><strong>Muhammad Aris</strong><span>Based in Jakarta, Indonesia</span></div></div><div><SectionLabel>Mengenal Lebih Dekat</SectionLabel><h2>Menggabungkan rekayasa sistem dengan cita rasa desain</h2><p>Saya percaya perangkat lunak terbaik lahir dari pertemuan antara logika sistemik yang solid dan estetika antarmuka yang membangkitkan emosi.</p><p>Fokus saya adalah menjembatani visi produk yang ambisius menjadi arsitektur nyata yang siap tumbuh bersama penggunanya.</p><div className="values">{values.map((value) => <div key={value.title}><b>{value.icon}</b><strong>{value.title}</strong><span>{value.description}</span></div>)}</div></div></section>

    <section id="kontak" className="section contact"><div><span className="eyebrow">Mulai sesuatu yang baru</span><h2>Punya ide luar biasa? Mari wujudkan bersama.</h2><p>Butuh platform berskala besar, sistem performa tinggi, atau konsultasi produk digital? Hubungi saya kapan saja.</p><div className="details">✉ <a href="mailto:hello@muhammadaris.dev">hello@muhammadaris.dev</a><br />◷ Maksimal 24 jam kerja</div></div><ContactForm /></section>
    <footer><div><strong><i /> Muhammad Aris</strong><p>Merancang arsitektur sistem perangkat lunak performa tinggi dan pengalaman digital interaktif.</p></div><div className="socials"><a href="https://github.com">GH</a><a href="https://linkedin.com">in</a><a href="mailto:hello@muhammadaris.dev">@</a></div><small>© 2026 Muhammad Aris · Jakarta, ID</small></footer>
  </main>;
}
