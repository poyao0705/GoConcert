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
    cardComponents.push(
        <Card key="view-all" card={{
            src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'View All',
            category: '',
        }} index={cardComponents.length} />
    )

    return (
        <>
            {loading ? <div>Loading...</div> : <Carousel items={cardComponents} />}
        </>
    );
}

const artistToCard = (artist: Artist) => {
    return {
        src: artist.image_source || 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: artist.artist_name || 'Unknown Artist',
        category: artist.country || 'Unknown Artist',
        genre: artist.genre_id || 'Unknown Artist'
    };
};

