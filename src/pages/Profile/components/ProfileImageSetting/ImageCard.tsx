import { SxProps } from "@mui/material";

import { useState } from "react";

import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import BaseCard from "./BaseCard";

interface ImageCardProps {
  src: string;
  alt: string;
  onDelete: () => void;
  sx?: SxProps;
}

export default function ImageCard({ src, alt, onDelete, sx }: ImageCardProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <BaseCard
      sx={{ position: "relative", ...sx }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: isHover ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          backgroundColor: "#333",
          opacity: 0.7,
        }}
      >
        <IconButton onClick={onDelete}>
          <DeleteIcon sx={{ color: "#fff", fontSize: "40px" }} />
        </IconButton>
      </Box>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
    </BaseCard>
  );
}
