import Link from 'next/link';

const columns = [
  {
    title: 'Site',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/profile', label: 'Profile' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-bold text-secondary">Paras</p>
            <p className="mt-2 text-sm text-primary">Platform perempuan untuk aksi iklim dan respons bencana berbasis komunitas.</p>
            <p className="mt-2 text-sm text-muted-foreground font-bold">Ruhana Kuddus</p>
            <ol className="mt-2 list-inside list-decimal text-muted-foreground">
              <li className="mt-2 text-sm text-muted-foreground">Annisafauziah Pebriyanti</li>
              <li className="mt-2 text-sm text-muted-foreground">Bunga Anisatul Zahra</li>
              <li className="mt-2 text-sm text-muted-foreground">Diva Ariella</li>
              <li className="mt-2 text-sm text-muted-foreground">Maharani Sabila</li>
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold tracking-wide text-foreground/80 uppercase">{column.title}</p>

                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Paras. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
