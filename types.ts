export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface GameFeature {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji or simple char for this demo
  image: string;
}

export enum Section {
  HERO = 'HERO',
  FEATURES = 'FEATURES',
  GALLERY = 'GALLERY',
  MISSION_CONTROL = 'MISSION_CONTROL'
}