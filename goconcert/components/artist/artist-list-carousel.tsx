'use client'

import { Card, Carousel } from "../ui/apple-cards-carousal";
import axios from "axios";
import { Artist } from "@/types/artist";
import { useEffect, useState } from "react";

interface ArtistListProps {
    maxItems?: number;
}
export function ArtistListCarousel({maxItems}: ArtistListProps) {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchFilteredArtists = async () => {
        setLoading(true);
        // default max items to 10
        const res = await axios.post('/api/artists', {maxItems: maxItems || 10 });
        setArtists(res.data);
        setLoading(false);
      };
    
    useEffect(() => {
        fetchFilteredArtists();
    }, [maxItems]);
    const cards = artists?.map(artistToCard) || [];
    const cardComponents = cards.map((card: any, index: number) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <>
            {loading ? <div>Loading...</div> : <Carousel items={cardComponents} />}
        </>
    );
}

const artistToCard = (artist: Artist) => {
    return {
        src: artist.image_source || '/default-artist-image.jpg',
        title: artist.artist_name || 'Unknown Artist',
        category: artist.country || 'Unknown Artist',
        genre: artist.genre_id || 'Unknown Artist'
    };
};

