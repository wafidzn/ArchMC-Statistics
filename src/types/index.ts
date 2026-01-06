// Global type definitions

export interface Player {
  id: string;
  username: string;
  // Add more player properties as needed
}

export interface Guild {
  id: string;
  name: string;
  description?: string;
  // Add more guild properties as needed
}

export interface GamemodeStats {
  kills: number;
  deaths: number;
  kdr: number;
  // Add more gamemode stats as needed
}