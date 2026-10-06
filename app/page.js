import Link from 'next/link';
import { ArrowRight, Code2, Palette, Sparkles, Users2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
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
    icon: Users2,
    title: 'Aksi komunitas',
    description: 'Bergabung dalam aksi berbasis laporan warga yang telah dikurasi dan disetujui admin.',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-fade" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-blob absolute top-24 left-10 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="animate-blob absolute top-40 right-10 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px] [animation-delay:4s]" />

        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-accent px-4 py-1.5 text-sm text-accent-foreground">
              <Sparkles className="size-3.5" />
              Aksi iklim dimulai dari sekitar kita
            </div>

            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-secondary">Perempuan</span> Bergerak,<span className="text-primary"><br />Lingkungan</span> Bertumbuh.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground"><span class="text-secondary">PARAS</span> membantu komunitas memahami risiko, membagikan kondisi di lapangan, dan mengubah kepedulian menjadi langkah yang relevan bagi lingkungan setempat.</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6 shadow-lg shadow-primary/20')}>
                Layanan Kami
                <ArrowRight className="size-4" />
              </Link>

              <Link href="/contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-full px-6')}>
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-primary">Bagaimana Kami Membantu Anda</h2>
          <p className="mt-3 text-muted-foreground"><span className="text-secondary">PARAS</span> menyediakan berbagai fitur yang membantu komunitas dalam menghadapi tantangan lingkungan.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20 text-primary font-bold">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-accent transition-colors group-hover:bg-secondary/20">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary px-8 py-14 text-center">
          <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-accent-foreground">Kebaikan Anda bisa dimulai hari ini</h2>
            <p className="mx-auto mt-3 max-w-xl text-accent-foreground">Mulai dari satu langkah kecil untuk lingkungan terdekat.</p>

            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 rounded-full px-6 text-secondary-foreground')}>
              Daftarkan Komunitas Anda
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
