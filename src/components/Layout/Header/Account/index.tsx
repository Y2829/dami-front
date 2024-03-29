import type { FC } from "react";

import { useState } from "react";
import { styled } from "@mui/material";
import { Box, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import DetailAccount from "./DetailAccount";

const NotiWrapper = styled(Box)({
  width: "30px",
  height: "30px",
  position: "relative",
  marginRight: 4,
  cursor: "pointer",
});

const NotiCount = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "1px",
  bottom: "1px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  fontSize: "8px",
  fontWeight: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.grey[100],
  backgroundColor: theme.palette.error.main,
}));

const Account: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickAccount = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "none", lg: "flex" },
        alignItems: "center",
      }}
    >
      <NotiWrapper>
        <NotificationsIcon
          sx={{
            color: "#1a1a1a",
          }}
        />
        <NotiCount>10</NotiCount>
      </NotiWrapper>
      <Box
        sx={{
          cursor: "pointer",
          position: "relative",
        }}
        onClick={handleClickAccount}
      >
        <Avatar>A</Avatar>
        <DetailAccount isOpen={isOpen} />
      </Box>
    </Box>
  );
};

export default Account;
