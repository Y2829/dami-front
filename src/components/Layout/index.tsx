import type { FC } from "react";

import { Outlet } from "react-router-dom";
import { styled, Box } from "@mui/material";

import Header from "./Header";
import Nav from "./Nav";
import { MOBILE_HEADER, DESKTOP_HEADER } from "src/configs";

const StyledRoot = styled(Box)({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: MOBILE_HEADER + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: DESKTOP_HEADER + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Layout: FC = () => {
  return (
    <StyledRoot>
      <Header />
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
};

export default Layout;
