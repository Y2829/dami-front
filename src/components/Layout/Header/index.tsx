import type { FC } from "react";

import { useState } from "react";

import { styled } from "@mui/material";
import { Box } from "@mui/material";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Account from "./Account";
import MoreBtn from "./MoreBtn";
import MoreMenuList from "./MoreMenuList";
import { DESKTOP_HEADER } from "src/configs/layout";

const StyledRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  height: `${DESKTOP_HEADER}px`,
  padding: "4px 16px",
  boxShadow: `0px 0px 12px ${theme.palette.grey[300]}`,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Header: FC = () => {
  const [isOpenMoreMenu, setIsOpenMoreMenu] = useState(false);

  const handleClickMoreBtn = () => {
    setIsOpenMoreMenu((prev) => !prev);
  };
  return (
    <StyledRoot>
      <Logo />
      <Navigation />
      <Account />
      <MoreBtn onClick={handleClickMoreBtn} />
      <MoreMenuList open={isOpenMoreMenu} />
    </StyledRoot>
  );
};

export default Header;
