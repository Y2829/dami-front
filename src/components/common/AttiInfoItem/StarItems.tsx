import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

interface StarItemsProps {
  rating: number;
}
export default function StarItems({ rating }: StarItemsProps) {
  return (
    <Box>
      {Array.from({ length: rating }).map(() => (
        <StarIcon sx={{ color: "#ffaa00", fontSize: "32px" }} />
      ))}
    </Box>
  );
}
