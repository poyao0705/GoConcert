'use client'
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ArtistFilter } from "@/types/artist";
import axios from "axios";
import { Artist } from "@/types/artist";
import { Genre } from "@/types/genre";
import Image from "next/image";

interface ArtistListProps {
    filters: ArtistFilter;
}
// {filters}: ArtistListProps
export function ArtistListBento({filters}: ArtistListProps) {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const fetchFilteredArtists = async () => {
        setLoading(true);
        const res = await axios.post('/api/artists', { filters });
        setArtists(res.data);
        setLoading(false);
    };

    // fetch the genres
    const fetchGenres = async () => {
        const res = await axios.get('/api/genres');
        setGenres(res.data);
    };
    // fetch the genres when the component mounts and only once
    useEffect(() => {
        fetchGenres();
    }, []); 

    // fetch the filtered artists when the filters change
    useEffect(() => {
        fetchFilteredArtists();
    }, [filters]);

    return (
      loading ? <div>Loading...</div> :
      <BentoGrid className="w-full">
        {artists.map((artist, i) => (
          <BentoGridItem
            key={i}
            title={artist.artist_name}
            description={genres.find(genre => genre.genre_id === artist.genre_id)?.genre_name}
            header={
              <div className="relative w-full h-full min-h-[12rem] min-w-[20rem] overflow-hidden rounded-t-xl">
                <Image
                  src={artist.image_source || `https://source.unsplash.com/random/800x600?${encodeURIComponent(artist.artist_name)}`} // or skeleton
                  alt={artist.artist_name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover/bento:scale-105"
                />
              </div>
            }
            className=""
          />
        ))}
      </BentoGrid>
    );
  }

