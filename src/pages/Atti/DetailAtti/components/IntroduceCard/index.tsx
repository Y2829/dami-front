import type { Atti } from "src/types/user";
import { Box, Card, Typography } from "@mui/material";

import {
  TierLabel,
  GradeLabel,
  FollowerLabel,
  GenderLabel,
  PositionLabel,
} from "src/components/common/AttiInfoItem";
import Audio from "src/components/common/Audio";

import BasicInfoCard from "./components/BasicInfoCard";
import IntroduceTextCard from "./components/IntroduceTextCard";

interface IntroduceCardProps {
  atti: Atti;
}

export default function IntroduceCard({ atti }: IntroduceCardProps) {
  return (
    <Card
      sx={{
        width: "600px",
        height: "400px",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <BasicInfoCard atti={atti} />
      <IntroduceTextCard text={atti.intro} sx={{ mt: 3 }} />

      <Audio audioSrc={atti.voice_intro} />
    </Card>
  );
}
