import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { Box } from "@mui/material";

import ROUTES from "src/configs/routes";
import { DESKTOP_HEADER } from "src/configs/layout";

import Profile from "../Account/DetailAccount/Profile";

interface MoreMenuListProps {
  open: boolean;
}

const NavItem = styled(Box)(({ theme }) => ({
  width: "100%",
  fontSize: "18px",
  fontWeight: 500,
  padding: "16px",
  cursor: "pointer",
  "& > a": {
    textDecoration: "none",
    color: theme.palette.grey[700],
  },
  "&: hover": {
    backgroundColor: "#e6f2ff",
  },
}));
export default function MoreMenuList({ open }: MoreMenuListProps) {
  const navigate = useNavigate();

  const handleClickLink = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        left: 0,
        top: `${DESKTOP_HEADER}px`,
        display: open ? "flex" : "none",
        flexDirection: "column",
        backgroundColor: "#fff",
        border: "1px solid #e6e6e6",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        zIndex: 99,
      }}
    >
      <Box sx={{ borderBottom: "1px solid #e6e6e6", padding: 1 }}>
        <Profile />
      </Box>
      {ROUTES.map(
        (route) =>
          route.isNavigation && (
            <NavItem
              key={route.path}
              onClick={() => handleClickLink(route.path)}
            >
              {route.name}
            </NavItem>
          ),
      )}
    </Box>
  );
}
