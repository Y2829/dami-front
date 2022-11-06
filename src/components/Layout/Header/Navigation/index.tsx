import type { FC } from "react";

import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { Box } from "@mui/material";

import ROUTES from "src/configs/routes";

const NavItem = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  margin: "0 32px",
  "& > a": {
    textDecoration: "none",
    color: theme.palette.grey[700],
    "&: hover": {
      color: theme.palette.primary.light,
    },
  },
}));

const Navigation: FC = () => {
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "start",
      }}
    >
      {ROUTES.map((route) => (
        <NavItem>
          <Link to={route.path}>{route.name}</Link>
        </NavItem>
      ))}
      <NavItem>아띠찾기</NavItem>
    </Box>
  );
};

export default Navigation;
