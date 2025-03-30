import { Artist } from "@/types/artist";
import axios from "axios";
import { Card } from "../ui/apple-cards-carousal";
import { Carousel } from "../ui/apple-cards-carousal";

// with post condition, if the artists are not found, show a message
export async function ArtistQuery(filter: {}) {
    const artists = await axios.get("http://localhost:3000/api/artists");
    // transfer artist to card
    const cards = artists.data.map(artistToCard);
    const cardComponents = cards.map((card: any, index: number) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                View artists
            </h2>
            <Carousel items={cardComponents} />
        </div>
    );
}

const artistToCard = (artist: Artist) => {
    return {
        src: artist.image_source || '/default-artist-image.jpg', // You'll need to ensure you have an image field or provide a default
        title: artist.artist_name || 'Unknown Artist',
        category: artist.country || 'Unknown Artist'
    };
};