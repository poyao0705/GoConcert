'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Genre } from "@/types/genre";
import { useEffect, useState } from "react";
// Define the props interface


interface FilterDropdownProps {
    genres: Genre[];
    onFilterChange?: (selectedGenreIds: number[]) => void; // optional callback
}


export function FilterDropdown({ genres, onFilterChange }: FilterDropdownProps) {
    // map genres to dropdown menu items
    if (!genres || !Array.isArray(genres)) {
        return null;
    }
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
    // ✅ Notify parent when selection changes
    useEffect(() => {
        if (onFilterChange) {
            onFilterChange(selectedGenres);
        }
    }, [selectedGenres, onFilterChange]);
    const toggleGenre = (genreId: number) => {
        // logic here:
        // 1. pass in all the selected genres
        // 2. isSelected is true if the genreId is in the selectedGenres array
        // 3. if isSelected is true, remove the genreId from the selectedGenres array
        // 4. if isSelected is false, add the genreId to the selectedGenres array
        // 5. call the onFilterChange callback with the updated selectedGenres array
        setSelectedGenres((prevSelected) => {
            const isSelected = prevSelected.includes(genreId);
            const updated = isSelected
                ? prevSelected.filter((id) => id !== genreId)
                : [...prevSelected, genreId];

            return updated;
        });
    };

    const genreItems = genres.map((genre) => (
        <DropdownMenuCheckboxItem key={genre.genre_id} checked={selectedGenres.includes(genre.genre_id)} onCheckedChange={() => toggleGenre(genre.genre_id)}>
            {genre.genre_name}
        </DropdownMenuCheckboxItem>
    ));
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Filter</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {genreItems}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}