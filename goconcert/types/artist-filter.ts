// types/artist-filters.ts
export type ArtistFilter = {
    genre_ids?: number[];
    countries?: string[];
    search?: string;
    popularity_min?: number;
  };