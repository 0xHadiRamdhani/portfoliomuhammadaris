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

export const navigation = [
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

export const projects: Project[] = [
  { category: "AI Platform", title: "Nexus AI Engine", description: "Platform analitik bertenaga AI dengan visualisasi data real-time, latency rendah, serta integrasi pemrosesan bahasa alami.", tags: ["Python", "Next.js", "PyTorch", "Tailwind"], theme: "ai" },
  { category: "Cloud Infrastructure", title: "Lumina Cloud Architecture", description: "Sistem infrastruktur mikroservis scalable untuk enterprise fintech yang aman, terukur, dan siap untuk trafik tinggi.", tags: ["Go", "Kubernetes", "AWS", "Redis"], theme: "cloud" },
  { category: "Design System", title: "Aetheria Design System", description: "Sistem desain komponen web berbasis token dengan performa cepat, aksesibilitas tinggi, dan integrasi Tailwind dinamis.", tags: ["TypeScript", "React", "Storybook", "Radix UI"], theme: "design" },
];

export const skills: Skill[] = [
  { icon: "◈", title: "Frontend Engineering", description: "Membangun antarmuka pengguna interaktif dengan animasi halus dan arsitektur komponen modular.", accent: "cyan", levels: [{ label: "React.js / Next.js", value: 95 }, { label: "TypeScript & State Mgmt", value: 90 }, { label: "Tailwind CSS", value: 92 }] },
  { icon: "⌘", title: "Backend & Data", description: "Mendesain API berlatensi rendah, transaksi aman, serta pipelines data yang andal untuk produk modern.", accent: "violet", levels: [{ label: "Node.js / Express", value: 92 }, { label: "Python / FastAPI", value: 88 }, { label: "PostgreSQL & Redis", value: 90 }] },
  { icon: "↗", title: "Cloud & DevOps", description: "Otomatisasi deployment, kontainerisasi, dan pemantauan sistem untuk lingkungan produksi.", accent: "blue", levels: [{ label: "Docker & Containers", value: 94 }, { label: "AWS / Google Cloud", value: 86 }, { label: "CI/CD Pipelines", value: 88 }] },
];

export const values = [
  { icon: "↯", title: "Ultra-fast delivery", description: "Respons sistem teroptimasi" },
  { icon: "◌", title: "Security-first", description: "Keamanan data berlapis" },
  { icon: "✦", title: "Pixel perfection", description: "Micro-interaction hidup" },
];
