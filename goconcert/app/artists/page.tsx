import axios from "axios";

import React from "react";
import { ArtistPageView } from "@/components/artist/artist-page-view";
export default async function ArtistListPage() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const genres = await axios.get(`${baseUrl}/api/genres`);
    const res = await axios.post(`${baseUrl}/api/artists`, {
      filters: { genre_ids: [] },
    });
    const artists = res.data;
      return (
        // <ArtistListBento filters={{ genre_ids: filteredGenreIds }} />
        <ArtistPageView initialArtists={artists} genres={genres.data} />
  );
}
