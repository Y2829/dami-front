import type { Tier, Position } from "src/types/lol";
import { Box, Grid, Button } from "@mui/material";

import { useState, useEffect } from "react";

import CenterContainer from "src/components/Layout/CenterContainer";

import ProfileImageSetting from "./components/ProfileImageSetting";
import TierSelectCard from "./components/TierSelectCard";
import PositionCheckCard from "./components/PositionCheckCard";
import AudioUploadCard from "./components/AudioUploadCard";
import IntroTextCard from "./components/IntroTextCard";

type DefaultValues = {
  introText: string;
  tier: Tier | null;
  position: Set<Position>;
};

export default function Profile() {
  const [defaultValues, setDefaultValues] = useState<DefaultValues>({
    introText: "",
    tier: null,
    position: new Set(),
  });
  const [isDirty, setIsDirty] = useState(false);
  const [tier, setTier] = useState<Tier | null>(defaultValues.tier);
  const [introText, setIntroText] = useState<string>(defaultValues.introText);
  const [position, setPosition] = useState<Set<Position>>(
    defaultValues.position,
  );

  const handleCheckPosition = (value: Position) => {
    const updatedPosition = new Set(position);
    if (updatedPosition.has(value)) {
      updatedPosition.delete(value);
    } else {
      updatedPosition.add(value);
    }

    setPosition(updatedPosition);
  };

  useEffect(() => {
    if (introText !== defaultValues.introText) {
      setIsDirty(true);
      return;
    }

    if (tier !== defaultValues.tier) {
      setIsDirty(true);
      return;
    }

    if (position !== defaultValues.position) {
      setIsDirty(true);
      return;
    }

    setIsDirty(false);
  }, [tier, introText, position]);

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
          <IntroTextCard
            value={introText}
            onChange={(newValue) => setIntroText(newValue)}
          />
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
                disabled={isDirty === false}
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
