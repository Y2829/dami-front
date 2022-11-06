import type { FC } from "react";

import { Outlet } from "react-router-dom";
import { styled, Box } from "@mui/material";

import Header from "./Header";

const StyledRoot = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
});

const Main = styled(Box)({
  overflow: "auto",
  minHeight: "100%",
  marginTop: "16px",
});

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
