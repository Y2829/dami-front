import type { Position, Tier } from "./lol";
import type { ReviewList } from "./review";

export type Gender = "FEMALE" | "MALE";

export interface Atti {
  id: number;
  name: string;
  intro: string;
  voice_intro: string;
  profile_image: string[];
  rating: string;
  followers: number;
  followings: number;
  tier: Tier;
  gender: Gender;
  position: Position[];
  accumulated_game_count: number;
  review: ReviewList;
}
