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
import { Artist } from "@/types/artist";
import { Genre } from "@/types/genre";
import Image from "next/image";

interface ArtistListProps {
    artists: Artist[];
    genres: Genre[];
}
export function ArtistListBento({artists, genres}: ArtistListProps) {

    return (
      <BentoGrid className="w-full">
        {artists.map((artist) => (
          <BentoGridItem
            key={artist.artist_id}
            title={artist.artist_name}
            description={genres.find(genre => genre.genre_id === artist.genre_id)?.genre_name}
            header={
              <div className="relative w-full h-full min-h-[12rem] min-w-[20rem] overflow-hidden rounded-t-xl">
                <Image
                  src={artist.image_source || `https://www.flaticon.com/free-icon/artist_2989859?term=artist&page=1&position=21&origin=search&related_id=2989859`} // or skeleton
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

