import { Box } from "@mui/material";

interface AudioProps {
  audioSrc: string;
}

export default function Auido({ audioSrc }: AudioProps) {
  return (
    <Box>
      <audio
        src={audioSrc}
        controls
        style={{ width: "100%", height: "35px" }}
      />
    </Box>
  );
}
