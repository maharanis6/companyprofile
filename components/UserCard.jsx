// 'use client';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// import { useFavorite } from '@/context/FavoriteContext';

// export default function UserCard({ user }) {
//   const { addFavorite, removeFavorite, isFavorite } = useFavorite();

//   const favorite = isFavorite(user.id);

//   const handleFavorite = () => {
//     if (favorite) {
//       removeFavorite(user.id);
//     } else {
//       addFavorite(user);
//     }
//   };

//   const initials = user.name
//     .split(' ')
//     .map((part) => part[0])
//     .slice(0, 2)
//     .join('')
//     .toUpperCase();

//   return (
//     <Card className="group border border-[#159038]/20 bg-[#F8F9FA] transition-all hover:-translate-y-1 hover:border-[#159038]/40 hover:shadow-xl hover:shadow-black/10">
//       <CardHeader>
//         <div className="flex items-center gap-3">
//           <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#159038]/30 to-[#159038]/10 text-sm font-semibold text-[#159038]">{initials}</div>

//           <div className="flex-1">
//             <CardTitle className="text-gray-900">{user.name}</CardTitle>

//             {/* Indicator jika user sudah favourite */}
//             {favorite && <span className="mt-1 inline-block text-xs font-medium text-[#E6008A]">♥ Favourite</span>}
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <p className="text-sm text-gray-600">{user.email}</p>

//         <p className="mt-1 text-sm text-gray-600">{user.company.name}</p>

//         <div className="mt-4 flex gap-2">
//           {/* View Profile */}
//           <Button className="flex-1 rounded-full bg-[#E6008A] text-white hover:bg-[#E6008A]/90">View Profile</Button>

//           {/* Favourite */}
//           <Button onClick={handleFavorite} variant="outline" className={`rounded-full ${favorite ? 'border-[#E6008A] bg-[#E6008A] text-white hover:bg-[#E6008A]/90' : 'border-[#E6008A]/50 text-[#E6008A] hover:bg-[#E6008A]/10'}`}>
//             {favorite ? '♥ Favourite' : '♡ Add Favourite'}
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

'use client';

import { Heart } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { useFavorite } from '@/context/FavoriteContext';
import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserCard({ user }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const favorited = isFavorite(user.id);

  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <Card className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">{initials}</div>
          <CardTitle>{user.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>

        <p className="mt-1 text-sm text-muted-foreground">{user.company.name}</p>

        <div className="mt-4 flex gap-2">
          <a href={`https://jsonplaceholder.typicode.com/users/${user.id}`} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), 'flex-1 rounded-full')}>
            View Profile
          </a>

          <Button variant={favorited ? 'secondary' : 'outline'} className="rounded-full" aria-pressed={favorited} onClick={() => (favorited ? removeFavorite(user.id) : addFavorite(user))}>
            <Heart className={favorited ? 'fill-red-500 text-red-500' : ''} />
            {favorited ? 'Favourite' : 'Add Favourite'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
