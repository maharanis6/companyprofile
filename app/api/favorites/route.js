import { getAllFavorites, addFavorite } from '@/lib/services/favoriteService';

export async function GET() {
  return Response.json(await getAllFavorites());
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || Object.keys(body).length === 0) {
      return Response.json({ error: 'Body request tidak boleh kosong' }, { status: 400 });
    }
    if (!body.id || !body.name) {
      return Response.json({ error: 'Field "id" dan "name" wajib diisi' }, { status: 400 });
    }

    const result = await addFavorite(body);

    if (!result.success) {
      return Response.json({ error: result.error }, { status: result.status });
    }

    return Response.json(result.data, { status: result.status });
  } catch (error) {
    return Response.json({ error: 'Format JSON body tidak valid atau kosong' }, { status: 400 });
  }
}
