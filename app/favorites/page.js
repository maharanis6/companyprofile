'use client';

import Link from "next/link";
import { Heart } from "lucide-react";

import { useFavorite } from '@/context/FavoriteContext';
import UserCard from '@/components/UserCard';

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-sm text-[#E6008A]">Favorite</p>

      <h1 className="mt-1 text-3xl font-bold text-gray-900">My Favorite Users</h1>

      {favorites.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((favorite) => (
            <UserCard
              key={favorite.id}
              user={{
                id: favorite.app_users.id,
                name: favorite.app_users.name,
                email: favorite.app_users.email,
                company: { name: favorite.app_users.company_name },
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
          <Heart className="size-8" />
          <p>Belum ada user favorit. Tandai dulu dari User Directory.</p>
          <Link href="/users" className="text-sm font-medium text-primary hover:underline">
            Buka User Directory →
          </Link>
        </div>
      )}
    </div>
  );
}
