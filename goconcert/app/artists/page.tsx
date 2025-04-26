import axios from "axios";

import React from "react";
import { ArtistPageView } from "@/components/artist/artist-page-view";
export default async function ArtistListPage() {
    const genres = await axios.get("http://localhost:3000/api/genres");
  return (
        // <ArtistListBento filters={{ genre_ids: filteredGenreIds }} />
        <ArtistPageView genres={genres.data} />
  );
}
