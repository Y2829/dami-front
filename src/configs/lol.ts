import type { Tier, Position } from "src/types/lol";

export const TIER_MAP: Record<Tier, { label: string; color: string }> = {
  IRON: {
    label: "아이언",
    color: "blue",
  },
  BRONZE: {
    label: "브론즈",
    color: "blue",
  },
  SILVER: {
    label: "실버",
    color: "silver",
  },
  GOLD: {
    label: "골드",
    color: "gold",
  },
  PLATINUM: {
    label: "플래티넘",
    color: "blue",
  },
  DIAMOND: {
    label: "다이아",
    color: "sky",
  },
  MASTER: {
    label: "마스터",
    color: "red",
  },
  "GRAND-MASTER": {
    label: "그랜드마스터",
    color: "green",
  },
  CHALLENGER: {
    label: "챌린저",
    color: "blue",
  },
};

export const POSITION_MAP: Record<Position, string> = {
  TOP: "탑",
  JUNGLE: "정글",
  MID: "미드",
  AD: "원딜",
  SUPPORT: "서포터",
};
