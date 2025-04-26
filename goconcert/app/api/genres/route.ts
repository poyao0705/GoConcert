import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { data: genres, error } = await supabase
    .from("genres")
    .select("genre_id, genre_name")
    .order("genre_name", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(genres);
}
