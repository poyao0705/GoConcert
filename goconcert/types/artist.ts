export type Artist = {
    artist_id: string;
    artist_name: string;
    country: string;
    image_source: string;
    genre_id: number;
  };

export type ArtistFilter = {
  genre_ids?: number[];
  countries?: string[];
  search?: string;
  popularity_min?: number;
};
  