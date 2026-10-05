import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

const values = ['Aman & Mudah', 'Berbasis Komunitas', 'Relevan Secara Lokal'];

const stats = [
  { value: '20+', label: 'Komunitas' },
  { value: '1+', label: 'Tahun Pengalaman' },
  { value: '100+', label: 'Anggota' },
  { value: '3', label: 'Layanan Inti' },
];
export default function About() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-secondary">Tentang</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl text-primary">Tentang Kami</h1>

          <p className="mt-4 max-w-md text-muted-foreground">PARAS membantu komunitas memahami risiko, membagikan kondisi di lapangan, dan mengubah kepedulian menjadi langkah yang relevan bagi lingkungan setempat.</p>

          <ul className="mt-8 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-secondary p-6">
              <p className="text-3xl font-bold tracking-tight text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-accent-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
