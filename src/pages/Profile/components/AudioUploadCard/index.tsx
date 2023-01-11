import { Card } from "@mui/material";

import Audio from "src/components/common/Audio";

export default function AudioUploadCard() {
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <Audio audioSrc="" />
    </Card>
  );
}
