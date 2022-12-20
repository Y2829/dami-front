import { useState, useEffect } from "react";

import Select from "src/components/common/Select";

interface TierSelectProps {
  value: Tier | null;
  onSelect: (value: Tier | null) => void;
}

export type Tier =
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "DIAMOND"
  | "MASTER"
  | "GRAND-MASTER"
  | "CHALLENGER";

const menuItems: Array<{ id: number; value: Tier; name: string }> = [
  { id: 1, value: "IRON", name: "아이언" },
  { id: 2, value: "BRONZE", name: "브론즈" },
  { id: 3, value: "SILVER", name: "실버" },
  { id: 4, value: "GOLD", name: "골드" },
  { id: 5, value: "PLATINUM", name: "플래티넘" },
  { id: 6, value: "DIAMOND", name: "다이아몬드" },
  { id: 7, value: "MASTER", name: "마스터" },
  { id: 8, value: "GRAND-MASTER", name: "그랜드마스터" },
  { id: 9, value: "CHALLENGER", name: "챌린저" },
];

export default function TierSelect({ value, onSelect }: TierSelectProps) {
  return (
    <Select
      label="티어"
      value={value}
      onChange={onSelect}
      menuItems={menuItems}
    />
  );
}
