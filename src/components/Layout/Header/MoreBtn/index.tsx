import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import palette from "src/theme/palette";

interface MoreBtnProps {
  onClick: () => void;
}

export default function MoreBtn({ onClick }: MoreBtnProps) {
  return (
    <Box
      sx={{
        display: { md: "block", lg: "none" },
      }}
    >
      <Button
        variant="outlined"
        sx={{
          borderColor: palette.primary.main,
        }}
        onClick={onClick}
      >
        <MenuIcon />
      </Button>
    </Box>
  );
}
