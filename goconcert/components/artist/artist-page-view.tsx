// components/artist/artist-page-view.tsx
'use client'

import { useEffect, useState } from "react";
import { FilterDropdown } from "./filter/filter-dropdown";
import { Genre } from "@/types/genre";
import { ArtistListCarousel } from "./artist-list-carousel";
import { ArtistListBento } from "./artist-list-bento";
interface Props {
  genres: Genre[];
}

export function ArtistPageView({ genres }: Props) {
  const [filteredGenreIds, setFilteredGenreIds] = useState<number[]>([]);
  const handleFilterChange = (selectedGenreIds: number[]) => {
    setFilteredGenreIds(selectedGenreIds);
  };

  return (
    <>
      <FilterDropdown genres={genres} onFilterChange={handleFilterChange} />
      {/* <ArtistListCarousel filters={{ genre_ids: filteredGenreIds }} /> */}
      <ArtistListBento filters={{ genre_ids: filteredGenreIds }} />
    </>
  );
}
