import './globals.css';
import localFont from 'next/font/local';

import { AuthProvider } from '@/context/AuthContext';
import { createClient } from '@/lib/supabase/server';

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={`dark ${fontSans.variable}`}>
      <body className="...">
        <AuthProvider user={user ? { id: user.id, email: user.email } : null}>
          <FavoriteProvider>
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </FavoriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
