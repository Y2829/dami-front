import type { FC } from "react";

import { Link } from "react-router-dom";
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
      <Link to="" style={{ textDecoration: "none" }}>
        <Title>DAMI</Title>
      </Link>
    </Box>
  );
};

export default Logo;
