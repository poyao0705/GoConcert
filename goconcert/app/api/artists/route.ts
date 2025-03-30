// app/api/artists/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
    const supabase = await createClient();
    const { data: artists } = await supabase.from("artists").select("*");
    return NextResponse.json(artists);
}
