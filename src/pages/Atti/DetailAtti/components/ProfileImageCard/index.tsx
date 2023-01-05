import { useState } from "react";
import { Box, Card } from "@mui/material";

import ImageCard from "src/components/common/PlaceholderImage";

import ImageList from "./ImageList";

interface ProfileImageCardProps {
  images: Array<string>;
}

export default function ProfileImageCard({ images }: ProfileImageCardProps) {
  const [selectedImageId, setSelectedImageId] = useState<number>(0);

  return (
    <Card
      sx={{
        width: "400px",
        height: "400px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
        }}
      >
        <ImageCard src={images[selectedImageId]} />
      </Box>
      <ImageList
        images={images}
        selectedImageId={selectedImageId}
        onSelect={(id) => setSelectedImageId(id)}
      />
    </Card>
  );
}
