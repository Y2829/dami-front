import { Box, Typography, Divider } from "@mui/material";

import LabelCheckbox from "src/components/common/LabelCheckbox";

export type Position = "TOP" | "JUNGLE" | "MID" | "AD" | "SUPPORT";

interface PositionCheckProps {
  checkedValues: Set<Position>;
  onCheck: (value: Position) => void;
}

const checkboxItems: Array<{ id: number; value: Position; label: string }> = [
  { id: 1, value: "TOP", label: "탑" },
  { id: 2, value: "JUNGLE", label: "정글" },
  { id: 3, value: "MID", label: "미드" },
  { id: 4, value: "AD", label: "원딜" },
  { id: 5, value: "SUPPORT", label: "서폿" },
];

export default function PositionCheck({
  checkedValues,
  onCheck,
}: PositionCheckProps) {
  return (
    <Box>
      <Typography>포지션</Typography>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 1 }}
      />
      {checkboxItems.map((item) => (
        <LabelCheckbox
          key={item.id}
          label={item.label}
          value={item.value}
          checked={checkedValues.has(item.value)}
          onChange={onCheck}
        />
      ))}
    </Box>
  );
}
