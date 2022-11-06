import type { FC } from "react";

import { styled } from "@mui/material";
import { Box, Divider, Typography } from "@mui/material";

import palette from "src/theme/palette";

const FollowItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    color: palette.primary.main,
  },
});

const Follow: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "8px",
        padding: "8px",
      }}
    >
      <FollowItem>
        <Typography variant="body2">팔로워</Typography>
        <Typography variant="h6">10</Typography>
      </FollowItem>
      <Divider orientation="vertical" variant="middle" flexItem />
      <FollowItem>
        <Typography variant="body2">팔로잉</Typography>
        <Typography variant="h6">123</Typography>
      </FollowItem>
    </Box>
  );
};

export default Follow;
