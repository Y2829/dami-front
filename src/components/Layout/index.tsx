import type { FC } from "react";

import { Outlet } from "react-router-dom";
import { styled, Box } from "@mui/material";

import { MOBILE_HEADER, DESKTOP_HEADER } from "src/configs/layout";
import Header from "./Header";

const StyledRoot = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled(Box)(({ theme }) => ({
  overflow: "auto",
  minHeight: "100%",
  marginTop: 2,
}));

const Layout: FC = () => {
  return (
    <StyledRoot>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
};

export default Layout;
