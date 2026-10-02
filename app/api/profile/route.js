const profile = [{ name: 'Maharani Sabila', role: 'Peserta Boothcamp', favoriteTech: 'Tailwind CSS, Shadcn UI, Next.js' }];

export async function GET() {
  return Response.json(profile);
}
