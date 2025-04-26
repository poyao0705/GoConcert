// components/artist/client-view.tsx
'use client'
import { Genre } from "@/types/genre";
import { ArtistListCarousel } from "./artist/artist-list-carousel";




interface Props {
  genres: Genre[];
}

export function HomepageClientView() {
  // set the max item to 1
  const MAX_ITEMS_PER_CAROUSEL = 10;


  return (
    <>
      <ArtistListCarousel maxItems={MAX_ITEMS_PER_CAROUSEL} />
    </>
  );
}
