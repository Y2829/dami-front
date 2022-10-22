import type { FC } from "react";

import { styled } from "@mui/material";
import { AppBar } from "@mui/material";

import { NAV_BAR_WIDTH } from "src/configs";

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_BAR_WIDTH + 1}px)`,
  },
}));

const Header: FC = () => {
  return (
    <StyledRoot>
      <StyledRoot>
        <h2>header</h2>
      </StyledRoot>
    </StyledRoot>
  );
};

export default Header;
