import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, LineChart, Palette } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code2,
    title: 'Info cuaca & bencana',
    description: 'Pahami kondisi di sekitar Anda melalui informasi yang ringkas dan mudah ditindaklanjuti.',
  },
  {
    icon: Palette,
    title: 'Lapor dengan lebih mudah',
    description: 'Ceritakan situasi melalui asisten percakapan dan pantau tindak lanjut laporan Anda.',
  },
  {
    icon: LineChart,
    title: 'Aksi komunitas',
    description: 'Bergabung dalam aksi berbasis laporan warga yang telah dikurasi dan disetujui admin.',
  },
];

export default function Services() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-secondary">Layanan</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl text-primary">Layanan Kami</h1>
          <p className="mt-4 text-muted-foreground">Satu alur sederhana yang membantu setiap anggota komunitas mengambil peran sesuai kebutuhan dan kemampuannya.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="group relative overflow-hidden border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 text-primary font-bold">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-accent transition-colors group-hover:bg-secondary/20">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
