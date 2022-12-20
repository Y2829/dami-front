import { Box, Typography, Divider } from "@mui/material";
import LabelCheckbox from "src/components/common/LabelCheckbox";

export type Gender = "MALE" | "FEMALE";

interface GenderCheckProps {
  checkedValue: Set<Gender>;
  onCheck: (gender: Gender | null) => void;
}

const checkboxItems: Array<{ id: number; value: Gender; label: string }> = [
  { id: 1, value: "MALE", label: "남성" },
  { id: 2, value: "FEMALE", label: "여성" },
];

export default function GenderCheck({
  checkedValue,
  onCheck,
}: GenderCheckProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">성별</Typography>
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
          checked={checkedValue.has(item.value)}
          onChange={onCheck}
        />
      ))}
    </Box>
  );
}
