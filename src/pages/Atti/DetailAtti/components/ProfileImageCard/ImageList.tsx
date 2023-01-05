import { Box } from "@mui/material";

import ImageCard from "src/components/common/PlaceholderImage";
import palette from "src/theme/palette";

interface ImageListProps {
  images: string[];
  selectedImageId: number;
  onSelect: (id: number) => void;
}

const IMAGES_MAX_SIZE = 5;

export default function ImageList({
  images,
  selectedImageId,
  onSelect,
}: ImageListProps) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image}
          sx={{
            width: "64px",
            height: "64px",
            cursor: "pointer",
            borderRadius: "12px",
            border:
              index === selectedImageId
                ? `4px solid ${palette.primary.main}`
                : "none",
            "&:hover": {
              border: `3px solid ${palette.primary.light}`,
            },
          }}
          onClick={() => onSelect(index)}
        />
      ))}
      {Array.from({ length: IMAGES_MAX_SIZE - images.length }).map(
        (_, index) => (
          <ImageCard
            key={IMAGES_MAX_SIZE + index}
            src={null}
            sx={{ width: "64px", height: "64px" }}
          />
        ),
      )}
    </Box>
  );
}
