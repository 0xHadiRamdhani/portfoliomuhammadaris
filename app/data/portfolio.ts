export type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  theme: "ai" | "cloud" | "design";
};

export type Skill = {
  icon: string;
  title: string;
  description: string;
  accent: "cyan" | "violet" | "blue";
  levels: { label: string; value: number }[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Muhammad Aris",
  role: "Systems & Creative Tech",
  kicker: "Portfolio / 2026",
  headline: "Merancang arsitektur & pengalaman digital bersama",
  highlight: "Muhammad Aris",
  description:
    "Full-Stack Developer & Creative Technologist yang merancang pengalaman digital berkinerja tinggi, elegan, dan berdampak nyata.",
  location: "Based in Jakarta, Indonesia",
  email: "hello@muhammadaris.dev",
  shortBio:
    "Saya percaya perangkat lunak terbaik lahir dari pertemuan antara logika sistemik yang solid dan estetika antarmuka yang membangkitkan emosi.",
  longerBio:
    "Fokus saya adalah menjembatani visi produk yang ambisius menjadi arsitektur nyata yang siap tumbuh bersama penggunanya.",
};

export const navigation: NavigationItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keterampilan", href: "#keterampilan" },
  { label: "Kontak", href: "#kontak" },
];

export const statistics = [
  { value: "5+", label: "Tahun pengalaman" },
  { value: "40+", label: "Proyek selesai" },
  { value: "99%", label: "Kepuasan klien" },
];

export const philosophy = {
  label: "Filosofi Rekayasa",
  title: "Kinerja tanpa kompromi & desain presisi",
  description:
    "Setiap baris kode dan komponen UI dirancang untuk kecepatan respons, arsitektur yang scalable, dan estetika digital mutakhir.",
  metrics: [
    { label: "Rata-rata waktu akses", value: "< 120ms" },
    { label: "Uptime layanan", value: "99.98%" },
  ],
};

export const projects: Project[] = [
  {
    category: "AI Platform",
    title: "Nexus AI Engine",
    description:
      "Platform analitik bertenaga AI dengan visualisasi data real-time, latency rendah, serta integrasi pemrosesan bahasa alami.",
    tags: ["Python", "Next.js", "PyTorch", "Tailwind"],
    theme: "ai",
  },
  {
    category: "Cloud Infrastructure",
    title: "Lumina Cloud Architecture",
    description:
      "Sistem infrastruktur mikroservis scalable untuk enterprise fintech yang aman, terukur, dan siap untuk trafik tinggi.",
    tags: ["Go", "Kubernetes", "AWS", "Redis"],
    theme: "cloud",
  },
  {
    category: "Design System",
    title: "Aetheria Design System",
    description:
      "Sistem desain komponen web berbasis token dengan performa cepat, aksesibilitas tinggi, dan integrasi Tailwind dinamis.",
    tags: ["TypeScript", "React", "Storybook", "Radix UI"],
    theme: "design",
  },
];

export const skills: Skill[] = [
  {
    icon: "◈",
    title: "Frontend Engineering",
    description:
      "Membangun antarmuka pengguna interaktif dengan animasi halus dan arsitektur komponen modular.",
    accent: "cyan",
    levels: [
      { label: "React.js / Next.js", value: 95 },
      { label: "TypeScript & State Mgmt", value: 90 },
      { label: "Tailwind CSS", value: 92 },
    ],
  },
  {
    icon: "⌘",
    title: "Backend & Data",
    description:
      "Mendesain API berlatensi rendah, transaksi aman, serta pipelines data yang andal untuk produk modern.",
    accent: "violet",
    levels: [
      { label: "Node.js / Express", value: 92 },
      { label: "Python / FastAPI", value: 88 },
      { label: "PostgreSQL & Redis", value: 90 },
    ],
  },
  {
    icon: "↗",
    title: "Cloud & DevOps",
    description:
      "Otomatisasi deployment, kontainerisasi, dan pemantauan sistem untuk lingkungan produksi.",
    accent: "blue",
    levels: [
      { label: "Docker & Containers", value: 94 },
      { label: "AWS / Google Cloud", value: 86 },
      { label: "CI/CD Pipelines", value: 88 },
    ],
  },
];

export const values = [
  { icon: "↯", title: "Ultra-fast delivery", description: "Respons sistem teroptimasi" },
  { icon: "◌", title: "Security-first", description: "Keamanan data berlapis" },
  { icon: "✦", title: "Pixel perfection", description: "Micro-interaction hidup" },
];

export const contact = {
  eyebrow: "Mulai sesuatu yang baru",
  heading: "Punya ide luar biasa? Mari wujudkan bersama.",
  description:
    "Butuh platform berskala besar, sistem performa tinggi, atau konsultasi produk digital? Hubungi saya kapan saja.",
  cta: "Kirim pesan sekarang →",
  successMessage:
    "Pesan berhasil dicatat. Muhammad Aris akan segera membalas.",
  form: {
    name: "Nama lengkap",
    email: "Alamat email",
    message: "Pesan atau rencana proyek",
    namePlaceholder: "misal: Raden Mas Danu",
    emailPlaceholder: "nama@perusahaan.com",
    messagePlaceholder: "Ceritakan secara ringkas mengenai kebutuhan Anda...",
  },
};

export const socialLinks: SocialLink[] = [
  { label: "GH", href: "https://github.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "@", href: "mailto:hello@muhammadaris.dev" },
];

export const footer = {
  title: "Muhammad Aris",
  description:
    "Merancang arsitektur sistem perangkat lunak performa tinggi dan pengalaman digital interaktif.",
  copyright: "© 2026 Muhammad Aris · Jakarta, ID",
};
