import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";

import LabelCheckbox from "src/components/common/LabelCheckbox";

export type Position = "TOP" | "JUNGLE" | "MID" | "AD" | "SUPPORT";

interface PositionCheckProps {
  onCheck: (checkedValues: Array<Position>) => void;
}

const checkboxItems: Array<{ id: number; value: Position; label: string }> = [
  { id: 1, value: "TOP", label: "탑" },
  { id: 2, value: "JUNGLE", label: "정글" },
  { id: 3, value: "MID", label: "미드" },
  { id: 4, value: "AD", label: "원딜" },
  { id: 5, value: "SUPPORT", label: "서폿" },
];

export default function PositionCheck({ onCheck }: PositionCheckProps) {
  const [checkedPositions, setCheckedPositions] = useState<Set<Position>>(
    new Set(),
  );
  const handleChange = (value: Position) => {
    const updateCheckedPositions = new Set(checkedPositions);
    if (checkedPositions.has(value)) {
      updateCheckedPositions.delete(value);
    } else {
      updateCheckedPositions.add(value);
    }

    setCheckedPositions(updateCheckedPositions);
  };

  useEffect(() => {
    onCheck(Array.from(checkedPositions));
  }, [checkedPositions]);

  return (
    <Box>
      <Typography>포지션</Typography>
      <Divider orientation="vertical" variant="middle" />
      {checkboxItems.map((item) => (
        <LabelCheckbox
          key={item.id}
          label={item.label}
          value={item.value}
          checked={checkedPositions.has(item.value)}
          onChange={handleChange}
        />
      ))}
    </Box>
  );
}
