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
      <BentoGrid className="w-full max-w-[2000px] mx-auto px-4">
        {artists.map((artist) => (
          <BentoGridItem
            key={artist.artist_id}
            title={artist.artist_name}
            description={genres.find(genre => genre.genre_id === artist.genre_id)?.genre_name}
            header={
              <div className="relative w-full h-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <Image
                  src={artist.image_source || `https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={artist.artist_name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover/bento:scale-105"
                />
              </div>
            }
            className="min-h-[300px]"
          />
        ))}
      </BentoGrid>
    );
  }

