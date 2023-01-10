import type { Tier, Position } from "src/types/lol";
import { Box, Grid, Button } from "@mui/material";

import { useState } from "react";

import CenterContainer from "src/components/Layout/CenterContainer";

import ProfileImageSetting from "./components/ProfileImageSetting";
import TierSelectCard from "./components/TierSelectCard";
import PositionCheckCard from "./components/PositionCheckCard";
import AudioUploadCard from "./components/AudioUploadCard";
import IntroTextCard from "./components/IntroTextCard";

export default function Profile() {
  const [tier, setTier] = useState<Tier | null>(null);
  const [position, setPosition] = useState<Set<Position>>(new Set());

  const handleCheckPosition = (value: Position) => {
    const updatedPosition = new Set(position);
    if (updatedPosition.has(value)) {
      updatedPosition.delete(value);
    } else {
      updatedPosition.add(value);
    }

    setPosition(updatedPosition);
  };

  return (
    <CenterContainer>
      <ProfileImageSetting
        images={[
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
        ]}
      />
      <Grid
        container
        spacing={3}
        sx={{
          mt: 3,
        }}
      >
        <Grid item xs={5}>
          <IntroTextCard />
        </Grid>

        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TierSelectCard
                value={tier}
                onSelect={(value) => setTier(value)}
              />
            </Grid>
            <Grid item xs={8}>
              <PositionCheckCard
                checkedValues={position}
                onCheck={handleCheckPosition}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <AudioUploadCard />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  height: "48px",
                }}
              >
                저장하기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CenterContainer>
  );
}
