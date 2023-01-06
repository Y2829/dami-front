import { useState, useEffect } from "react";

import Select from "src/components/common/Select";

interface SortTypeSelectProps {
  value: SortType;
  onSelect: (value: SortType) => void;
}

export type SortType =
  | "추천순"
  | "신규가입자순"
  | "평점순"
  | "누적의뢰순"
  | "낮은가격순"
  | "높은가격순";

const menuItems: Array<{ id: number; value: SortType; name: string }> = [
  { id: 1, value: "추천순", name: "추천순" },
  { id: 2, value: "신규가입자순", name: "신규가입자순" },
  { id: 3, value: "평점순", name: "평점순" },
  { id: 4, value: "누적의뢰순", name: "누적의뢰순" },
  { id: 5, value: "낮은가격순", name: "낮은가격순" },
  { id: 6, value: "높은가격순", name: "높은가격순" },
];

export default function SortTypeSelect({
  value,
  onSelect,
}: SortTypeSelectProps) {
  return (
    <Select
      label={"정렬"}
      value={value}
      onChange={onSelect}
      menuItems={menuItems}
    />
  );
}
