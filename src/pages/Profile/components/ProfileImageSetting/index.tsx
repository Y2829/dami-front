import { Box } from "@mui/material";

import ImageCard from "./ImageCard";
import AddCard from "./AddCard";

interface ProfileImageSettingProps {
  images: string[];
}

const IMAGES_MAX_SIZE = 5;

export default function ProfileImageSetting({
  images,
}: ProfileImageSettingProps) {
  const handleClickAddImage = () => {
    console.log("click");
  };

  const handleClickDelete = () => {
    console.log("delete");
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image}
          alt={`profile image ${index + 1}`}
          sx={{ mr: "64px" }}
          onDelete={handleClickDelete}
        />
      ))}
      {images.length < IMAGES_MAX_SIZE && (
        <AddCard onClick={handleClickAddImage} />
      )}
    </Box>
  );
}
