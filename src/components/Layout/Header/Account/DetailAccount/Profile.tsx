import type { FC } from "react";

import { Box, Avatar, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import palette from "src/theme/palette";

const Profile: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        padding: "8px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: palette.grey[300],
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar>A</Avatar>
        <Typography
          sx={{
            marginLeft: 3,
          }}
        >
          닉네임
        </Typography>
      </Box>

      <NavigateNextIcon
        sx={{
          color: palette.grey[500],
        }}
      />
    </Box>
  );
};

export default Profile;
