export interface StoryCard {
  profileImage: string;
  username: string;
  active: boolean;
}

export interface Post {
  username: string;
  profileImage: string;
  location?: string;
  caption?: string;
  postImage: string;
}

export interface Chat {
  profileImage: string;
  username: string;
  time: string;
  prompt: string;
  active: boolean;
}
