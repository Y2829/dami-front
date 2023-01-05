import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";

interface ImageCardProps {
  src: string | null;
  sx?: SxProps;
  onClick?: () => void;
}

export default function ImageCard({ src, sx, onClick }: ImageCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        ...sx,
      }}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#e6e6e6",
            borderRadius: "8px",
          }}
        />
      )}
    </Box>
  );
}
