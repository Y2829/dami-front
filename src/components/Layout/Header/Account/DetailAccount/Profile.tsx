import type { FC } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Avatar, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import palette from "src/theme/palette";

const Profile: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/me");
  };
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
        onClick={handleClick}
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
        onClick={handleClick}
      />
    </Box>
  );
};

export default Profile;
