import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";

interface AudioProps {
  audioSrc: string;
  sx?: SxProps;
}

export default function Audio({ audioSrc, sx }: AudioProps) {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <audio
        src={audioSrc}
        controls
        style={{ width: "100%", height: "35px" }}
      />
    </Box>
  );
}
