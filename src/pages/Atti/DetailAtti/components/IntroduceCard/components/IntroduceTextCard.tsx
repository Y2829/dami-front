import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";

interface IntroduceTextCardProps {
  text: string;
  sx?: SxProps;
}

export default function IntroduceTextCard({
  text,
  sx,
}: IntroduceTextCardProps) {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Typography>{text}</Typography>
    </Box>
  );
}
