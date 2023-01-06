import type { SxProps } from "@mui/material";
import type { Position } from "src/types/lol";

import { Box, Typography } from "@mui/material";

import { POSITION_MAP } from "src/configs/lol";

interface PositionLabelProps {
  position: Array<Position>;
  sx?: SxProps;
}

export default function PositionLabel({ position, sx }: PositionLabelProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {position.map((value) => (
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            mx: "2px",
            ...sx,
          }}
        >
          {POSITION_MAP[value]}
          {"  "}
        </Typography>
      ))}
    </Box>
  );
}
