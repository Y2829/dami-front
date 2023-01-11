import { styled } from "@mui/system";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface StarSelectProps {
  value: number;
  onClick: (index: number) => void;
}

const STAR_MAX_SIZE = 5;

export default function StarSelect({ value, onClick }: StarSelectProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {Array.from({ length: STAR_MAX_SIZE }).map((_, index) =>
        index + 1 <= value ? (
          <ColorStar onClick={() => onClick(index + 1)} />
        ) : (
          <GrayStar onClick={() => onClick(index + 1)} />
        ),
      )}
    </Box>
  );
}

const GrayStar = styled(StarIcon)({
  color: "#d9d9d9",
  cursor: "pointer",
  fontSize: "32px",
});

const ColorStar = styled(StarIcon)({
  color: "#ffaa00",
  cursor: "pointer",
  fontSize: "32px",
});
