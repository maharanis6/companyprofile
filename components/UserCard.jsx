'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useFavorite } from '@/context/FavoriteContext';

export default function UserCard({ user }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

  const favorite = isFavorite(user.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  };

  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <Card className="group border border-[#159038]/20 bg-[#F8F9FA] transition-all hover:-translate-y-1 hover:border-[#159038]/40 hover:shadow-xl hover:shadow-black/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#159038]/30 to-[#159038]/10 text-sm font-semibold text-[#159038]">{initials}</div>

          <div className="flex-1">
            <CardTitle className="text-gray-900">{user.name}</CardTitle>

            {/* Indicator jika user sudah favourite */}
            {favorite && <span className="mt-1 inline-block text-xs font-medium text-[#E6008A]">♥ Favourite</span>}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600">{user.email}</p>

        <p className="mt-1 text-sm text-gray-600">{user.company.name}</p>

        <div className="mt-4 flex gap-2">
          {/* View Profile */}
          <Button className="flex-1 rounded-full bg-[#E6008A] text-white hover:bg-[#E6008A]/90">View Profile</Button>

          {/* Favourite */}
          <Button onClick={handleFavorite} variant="outline" className={`rounded-full ${favorite ? 'border-[#E6008A] bg-[#E6008A] text-white hover:bg-[#E6008A]/90' : 'border-[#E6008A]/50 text-[#E6008A] hover:bg-[#E6008A]/10'}`}>
            {favorite ? '♥ Favourite' : '♡ Add Favourite'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
