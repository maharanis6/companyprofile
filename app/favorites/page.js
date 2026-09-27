'use client';

import { useFavorite } from '@/context/FavoriteContext';
import UserCard from '@/components/UserCard';

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-sm text-[#E6008A]">Favorite</p>

      <h1 className="mt-1 text-3xl font-bold text-gray-900">My Favorite Users</h1>

      {favorites.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed p-8 text-center">
          <p className="text-gray-500">Belum ada user yang ditambahkan ke favourite.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
