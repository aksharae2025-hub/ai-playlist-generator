export interface Track {
  name: string;
  artist: string;
  duration: string;
}

export interface PlaylistData {
  id: number;
  name: string;
  description: string;
  image: string;
  tracks: Track[];
}

export interface MockPlaylists {
  happy: PlaylistData[];
  sad: PlaylistData[];
  energetic: PlaylistData[];
  chill: PlaylistData[];
  [key: string]: PlaylistData[];
}

export type MoodType = 'happy' | 'sad' | 'energetic' | 'chill';