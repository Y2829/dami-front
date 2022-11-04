import type { FC } from "react";

import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const Logo: FC = () => {
  return (
    <Box>
      <Title>DAMI</Title>
    </Box>
  );
};

export default Logo;
