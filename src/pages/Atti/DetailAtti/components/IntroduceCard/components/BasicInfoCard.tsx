import type { Atti } from "src/types/user";
import { Box, Typography } from "@mui/material";

import {
  TierLabel,
  FollowerLabel,
  GenderLabel,
  PositionLabel,
} from "src/components/common/AttiInfoItem";

interface BasicInfoCardProps {
  atti: Atti;
}

export default function BasicInfoCard({ atti }: BasicInfoCardProps) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h6">{atti.name}</Typography>
          <GenderLabel gender={atti.gender} />
        </Box>
        <FollowerLabel followerCount={atti.followers} />
      </Box>

      <TierLabel tier={atti.tier} sx={{ mt: 2 }} />

      <Box
        sx={{
          display: "flex",
          mt: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          가능한 포지션:
        </Typography>
        <PositionLabel position={atti.position} />
      </Box>
    </Box>
  );
}
