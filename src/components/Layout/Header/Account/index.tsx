import type { FC } from "react";

import { styled } from "@mui/material";
import { Box, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotiWrapper = styled(Box)({
  width: "30px",
  height: "30px",
  position: "relative",
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
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <NotiWrapper>
        <NotificationsIcon
          sx={{
            color: "#1a1a1a",
            marginRight: 1,
          }}
        />
        <NotiCount>10</NotiCount>
      </NotiWrapper>
      <Avatar>A</Avatar>
    </Box>
  );
};

export default Account;
