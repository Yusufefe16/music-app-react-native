export interface Song {
    id: string;
    title: string;
    artist: string;
    album: string;
    year: number;
    isSoldOut: boolean;
    imageUrl: string;
}

export interface SongCardProps {
    song: Song;
}


export interface SearchBarProps {
    onSearch: (text: string) => void;
}
