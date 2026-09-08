"use client";

import { FormEvent, useState } from "react";

type Project = [string, string, string, string[], string];
type Skill = [string, string, string, [string, number][]];

const projects: Project[] = [
  ["AI Platform", "Nexus AI Engine", "Platform analitik bertenaga AI dengan visualisasi data real-time, latency rendah, serta integrasi pemrosesan bahasa alami.", ["Python", "Next.js", "PyTorch", "Tailwind"], "ai"],
  ["Cloud Infrastructure", "Lumina Cloud Architecture", "Sistem infrastruktur mikroservis scalable untuk enterprise fintech yang aman, terukur, dan siap untuk trafik tinggi.", ["Go", "Kubernetes", "AWS", "Redis"], "cloud"],
  ["Design System", "Aetheria Design System", "Sistem desain komponen web berbasis token dengan performa cepat, aksesibilitas tinggi, dan integrasi Tailwind dinamis.", ["TypeScript", "React", "Storybook", "Radix UI"], "design"],
];

const skills: Skill[] = [
  ["◈", "Frontend Engineering", "Membangun antarmuka pengguna interaktif dengan animasi halus dan arsitektur komponen modular.", [["React.js / Next.js", 95], ["TypeScript & State Mgmt", 90], ["Tailwind CSS", 92]]],
  ["⌘", "Backend & Data", "Mendesain API berlatensi rendah, transaksi aman, serta pipelines data yang andal untuk produk modern.", [["Node.js / Express", 92], ["Python / FastAPI", 88], ["PostgreSQL & Redis", 90]]],
  ["↗", "Cloud & DevOps", "Otomatisasi deployment, kontainerisasi, dan pemantauan sistem untuk lingkungan produksi.", [["Docker & Containers", 94], ["AWS / Google Cloud", 86], ["CI/CD Pipelines", 88]]],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const sendMessage = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <main>
    <div className="background-grid" />
    <header className="site-header">
      <a className="brand" href="#beranda"><b>&gt;_</b><span><strong>Muhammad Aris</strong><small>Systems &amp; Creative Tech</small></span></a>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
      <nav className={menuOpen ? "nav open" : "nav"}>{["Beranda", "Tentang", "Proyek", "Keterampilan", "Kontak"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <a className="header-cta" href="#kontak">Hubungi Saya</a>
    </header>
    <section id="beranda" className="hero section">
      <h1>Merancang arsitektur &amp; pengalaman digital bersama <em>Muhammad Aris</em></h1>
      <p className="hero-copy">Full-Stack Developer &amp; Creative Technologist yang merancang pengalaman digital berkinerja tinggi, elegan, dan berdampak nyata.</p>
      <div className="hero-actions"><a className="button primary" href="#proyek">Lihat portofolio proyek →</a><a className="button secondary" href="#kontak">↓ Unduh CV / Resume</a></div>
      <div className="stats"><div><b>5+</b><span>Tahun pengalaman</span></div><div><b>40+</b><span>Proyek selesai</span></div><div><b>99%</b><span>Kepuasan klien</span></div></div>
    </section>
    <section className="section philosophy"><div className="phi">◇</div><div><span className="label">Filosofi Rekayasa</span><h2>Kinerja tanpa kompromi &amp; desain presisi</h2><p>Setiap baris kode dan komponen UI dirancang untuk kecepatan respons, arsitektur yang scalable, dan estetika digital mutakhir.</p></div><div className="metrics"><div><small>Rata-rata waktu akses</small><b>&lt; 120ms</b></div><div><small>Uptime layanan</small><b>99.98%</b></div></div></section>
    <section id="proyek" className="section projects"><div className="section-head"><div><span className="label">Karya Pilihan</span><h2>Proyek unggulan sistem &amp; web</h2></div><p>Eksplorasi arsitektur komputasi awan, visualisasi data real-time, dan sistem desain untuk platform modern.</p></div><div className="project-grid">{projects.map(([category, title, description, tags, visual]) => <article className="card" key={title}><div className={`visual ${visual}`}><span>{category}</span><div className="visual-ui"><i /><i /><i /><b /></div></div><div className="card-copy"><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="card-links"><a href="#kontak">Buka demo ↗</a><a href="#kontak">Repositori &lt;/&gt;</a></div></div></article>)}</div></section>
    <section id="keterampilan" className="section skills"><div className="center"><span className="label purple">Matriks Keahlian</span><h2>Teknologi &amp; kompetensi inti</h2><p>Kombinasi keahlian frontend interaktif, rekayasa backend tangguh, dan otomatisasi infrastruktur awan.</p></div><div className="skill-grid">{skills.map(([icon, title, copy, values], index) => <article className={`card skill s${index}`} key={title}><b className="skill-icon">{icon}</b><h3>{title}</h3><p>{copy}</p><div className="bars">{values.map(([name, value]) => <div key={String(name)}><span>{name}<b>{value}%</b></span><i><em style={{ width: `${value}%` }} /></i></div>)}</div></article>)}</div></section>
    <section id="tentang" className="section about"><div className="portrait"><i /><b>MA</b><div><strong>Muhammad Aris</strong><span>Based in Jakarta, Indonesia</span></div></div><div><span className="label">Mengenal Lebih Dekat</span><h2>Menggabungkan rekayasa sistem dengan cita rasa desain</h2><p>Saya percaya perangkat lunak terbaik lahir dari pertemuan antara logika sistemik yang solid dan estetika antarmuka yang membangkitkan emosi.</p><p>Fokus saya adalah menjembatani visi produk yang ambisius menjadi arsitektur nyata yang siap tumbuh bersama penggunanya.</p><div className="values"><div><b>↯</b><strong>Ultra-fast delivery</strong><span>Respons sistem teroptimasi</span></div><div><b>◌</b><strong>Security-first</strong><span>Keamanan data berlapis</span></div><div><b>✦</b><strong>Pixel perfection</strong><span>Micro-interaction hidup</span></div></div></div></section>
    <section id="kontak" className="section contact"><div><span className="eyebrow">Mulai sesuatu yang baru</span><h2>Punya ide luar biasa? Mari wujudkan bersama.</h2><p>Butuh platform berskala besar, sistem performa tinggi, atau konsultasi produk digital? Hubungi saya kapan saja.</p><div className="details">✉ <a href="mailto:hello@muhammadaris.dev">hello@muhammadaris.dev</a><br />◷ Maksimal 24 jam kerja</div></div><form onSubmit={sendMessage}><label>Nama lengkap<input required placeholder="misal: Raden Mas Danu" /></label><label>Alamat email<input required type="email" placeholder="nama@perusahaan.com" /></label><label>Pesan atau rencana proyek<textarea required rows={4} placeholder="Ceritakan secara ringkas mengenai kebutuhan Anda..." /></label><button className="button primary" type="submit">Kirim pesan sekarang →</button>{sent && <p className="success">Pesan berhasil dicatat. Muhammad Aris akan segera membalas.</p>}</form></section>
    <footer><div><strong><i /> Muhammad Aris</strong><p>Merancang arsitektur sistem perangkat lunak performa tinggi dan pengalaman digital interaktif.</p></div><div className="socials"><a href="https://github.com">GH</a><a href="https://linkedin.com">in</a><a href="mailto:hello@muhammadaris.dev">@</a></div><small>© 2026 Muhammad Aris · Jakarta, ID</small></footer>
  </main>;
}
