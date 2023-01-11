import type { Tier } from "src/types/lol";
import type { SortType } from "./FilterItems/SortTypeSelect";
import type { Gender } from "../../../../../components/common/CheckList/GenderCheck";
import type { Position } from "../../../../../components/common/CheckList/PositionCheck";
import { useState } from "react";

import { Box, Button } from "@mui/material";
import SortTypeSelect from "./FilterItems/SortTypeSelect";
import TierSelect from "../../../../../components/common/SelectList/TierSelect";
import GenderCheck from "../../../../../components/common/CheckList/GenderCheck";
import PositionCheck from "../../../../../components/common/CheckList/PositionCheck";

export default function FilterGroup() {
  const [checkedGenderValue, setCheckedGenderValue] = useState<Set<Gender>>(
    new Set(),
  );
  const [checkedPositionValues, setCheckedPositionValues] = useState<
    Set<Position>
  >(new Set());
  const [selectedSortType, setSelectedSortType] = useState<SortType>("추천순");
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  const handleCheckGender = (gender: Gender | null) => {
    if (gender === null) return;
    const updateCheckValue = new Set<Gender>();
    if (checkedGenderValue.has(gender) === false) {
      updateCheckValue.add(gender);
    }

    setCheckedGenderValue(updateCheckValue);
  };

  const handleCheckPosition = (position: Position) => {
    const updateCheckValues = new Set(checkedPositionValues);
    if (checkedPositionValues.has(position)) {
      updateCheckValues.delete(position);
    } else {
      updateCheckValues.add(position);
    }

    setCheckedPositionValues(updateCheckValues);
  };

  const handleSelectSortType = (sortType: SortType) => {
    setSelectedSortType(sortType);
  };

  const handleSelectTier = (tier: Tier | null) => {
    if (tier === null) return;
    setSelectedTier(tier);
  };

  const handleClickResetBtn = () => {
    setSelectedSortType("추천순");
    setSelectedTier(null);
    setCheckedGenderValue(new Set());
    setCheckedPositionValues(new Set());
  };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "25%",
          minWidth: "350px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SortTypeSelect
          value={selectedSortType}
          onSelect={handleSelectSortType}
        />
        <TierSelect value={selectedTier} onSelect={handleSelectTier} />
      </Box>
      <Box
        sx={{
          width: "70%",
          minWidth: "700px",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <GenderCheck
          checkedValue={checkedGenderValue}
          onCheck={handleCheckGender}
        />
        <PositionCheck
          checkedValues={checkedPositionValues}
          onCheck={handleCheckPosition}
        />
        <Button variant="contained" onClick={handleClickResetBtn}>
          초기화
        </Button>
      </Box>
    </Box>
  );
}
