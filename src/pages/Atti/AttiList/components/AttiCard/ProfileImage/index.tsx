import { styled } from "@mui/system";
import { Box } from "@mui/material";

interface ProfileImageProps {
  imgSrc?: string;
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100%",
      }}
    >
      {imgSrc ? <img src={imgSrc} /> : <PlaceholderImage />}
    </Box>
  );
}

const PlaceholderImage = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "#d9d9d9",
});
