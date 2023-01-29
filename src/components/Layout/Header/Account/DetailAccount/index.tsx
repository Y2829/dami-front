import type { FC } from "react";

import { styled } from "@mui/material";
import { Box, Divider } from "@mui/material";

import { DESKTOP_HEADER } from "src/configs/layout";
import Profile from "./Profile";
import Follow from "./Follow";
import ChargedCoin from "./ChargedCoin";

interface DetailAccountProps {
  isOpen: boolean;
}

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  width: "300px",
  position: "absolute",
  top: `calc(${DESKTOP_HEADER}px - 40px)`,
  right: 0,
  padding: "16px",
  borderRadius: "8px",
  display: isOpen ? "flex" : "none",
  flexDirection: "column",
  boxShadow: "0px 0px 12px #DFE3E8",
  backgroundColor: "#fff",
  zIndex: 10,
}));

const DetailAccount: FC<DetailAccountProps> = ({ isOpen }) => {
  return (
    <StyledRoot isOpen={isOpen}>
      <Profile />
      <Follow />
      <Divider />
      <ChargedCoin />
    </StyledRoot>
  );
};

export default DetailAccount;
