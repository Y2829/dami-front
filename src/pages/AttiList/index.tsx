import { useState } from "react";

import Box from "@mui/material/Box";

import FilterGroup from "./components/FilterGroup";
import AttiCard from "./components/AttiCard";
export default function AttiList() {
  return (
    <>
      <FilterGroup />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <AttiCard />
        <AttiCard />
      </Box>
    </>
  );
}
