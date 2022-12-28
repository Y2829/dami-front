import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";

interface PlaceholderImageProps {
  sx?: SxProps;
}

export default function PlaceholderImage({ sx }: PlaceholderImageProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#d9d9d9",
        ...sx,
      }}
    />
  );
}
