'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import { FilterDropdown } from "./filter/filter-dropdown";
import { Artist } from "@/types/artist";
import { Genre } from "@/types/genre";
import { ArtistListBento } from "./artist-list-bento";

interface Props {
  initialArtists: Artist[];
  genres: Genre[];
}

export function ArtistPageView({ initialArtists, genres }: Props) {
  const [artists, setArtists] = useState<Artist[]>(initialArtists);
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredArtists = async () => {
      setLoading(true);
      try {
        const res = await axios.post('/api/artists', {
          filters: { genre_ids: selectedGenreIds },
        });
        setArtists(res.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFilteredArtists();
  }, [selectedGenreIds]);

  const handleFilterChange = (newSelectedGenreIds: number[]) => {
    setSelectedGenreIds(newSelectedGenreIds);
  };

  return (
    <>
      <FilterDropdown genres={genres} onFilterChange={handleFilterChange} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArtistListBento artists={artists} genres={genres} />
      )}
    </>
  );
}
