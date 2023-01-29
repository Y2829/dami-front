import { useState } from "react";

import Box from "@mui/material/Box";

import CenterContainer from "src/components/Layout/CenterContainer";
import FilterGroup from "./components/FilterGroup";
import AttiCard from "./components/AttiCard";

export default function AttiList() {
  return (
    <CenterContainer>
      <FilterGroup />
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <AttiCard />
        <AttiCard />
      </Box>
    </CenterContainer>
  );
}
