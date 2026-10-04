import { removeFavorite, updateFavoriteNote } from '@/lib/services/favoriteService';

export async function DELETE(request, { params }) {
  const { id } = await params;
  const numId = Number(id);
  const result = removeFavorite(numId);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: 'Berhasil dihapus' });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const numId = Number(id);

  try {
    const body = await request.json();

    if (!body || typeof body.note !== 'string' || body.note.trim() === '') {
      return Response.json({ error: 'Field "note" wajib diisi dan harus berupa string yang tidak kosong' }, { status: 400 });
    }
    const result = updateFavoriteNote(numId, body.note);
    if (!result.success) {
      return Response.json({ error: result.error }, { status: result.status });
    }
    return Response.json({
      message: 'Catatan berhasil diperbarui',
      data: result.data,
    });
  } catch (error) {
    return Response.json({ error: 'Request body tidak valid' }, { status: 400 });
  }
}
