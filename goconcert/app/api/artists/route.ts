// app/api/artists/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { ArtistFilter } from '@/types/artist';

export async function POST(request: Request) {
    const { filters = {}, maxItems = 10 }: { filters?: ArtistFilter; maxItems?: number } = await request.json();
    const { genre_ids, countries, search, popularity_min } = filters;
    const supabase = await createClient();
    let query = supabase.from("artists").select("*");
    if (genre_ids && genre_ids.length > 0) {
        query = query.in("genre_id", genre_ids);
    }
    if (maxItems) {
        query = query.limit(maxItems);
    }
    // order by alphabetically
    query = query.order("artist_name", { ascending: true });
    const { data: artists } = await query;
    return NextResponse.json(artists);
}
