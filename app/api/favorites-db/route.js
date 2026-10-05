import { supabase } from '@/lib/supabase';

export async function GET() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'ADA' : 'KOSONG');

  const { data, error } = await supabase.from('favorites').select('*');

  console.log('DATA:', data);
  console.log('ERROR:', error);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
