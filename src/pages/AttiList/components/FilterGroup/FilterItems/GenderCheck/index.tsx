import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import LabelCheckbox from "src/components/common/LabelCheckbox";

export type Gender = "MALE" | "FEMALE";

interface GenderCheckProps {
  onCheck: (gender: Gender | null) => void;
}

const checkboxItems: Array<{ id: number; value: Gender; label: string }> = [
  { id: 1, value: "MALE", label: "남성" },
  { id: 2, value: "FEMALE", label: "여성" },
];

export default function GenderCheck({ onCheck }: GenderCheckProps) {
  const [checkedGender, setCheckedGender] = useState<Set<Gender>>(new Set());
  const handleChange = (value: Gender) => {
    const updateCheckedGender = new Set<Gender>();
    if (checkedGender.has(value) === false) {
      updateCheckedGender.add(value);
    }
    setCheckedGender(updateCheckedGender);
  };

  useEffect(() => {
    const checkedGenderList = Array.from(checkedGender);

    if (checkedGenderList.length > 0) {
      onCheck(checkedGenderList[0]);
      return;
    }

    onCheck(null);
  }, [checkedGender]);

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
          checked={checkedGender.has(item.value)}
          onChange={handleChange}
        />
      ))}
    </Box>
  );
}
