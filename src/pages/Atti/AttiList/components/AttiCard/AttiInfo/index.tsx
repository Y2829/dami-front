import { Box, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import IconWithLabel from "src/components/common/IconWithLabel";

export default function AttiInfo() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h6">닉네임</Typography>
        <IconWithLabel IconComponent={<PersonIcon />} label="100" />
      </Box>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconWithLabel
          IconComponent={<EmojiEventsIcon />}
          label="골드"
          sx={{
            marginRight: 1,
          }}
        />
        <IconWithLabel IconComponent={<StarIcon />} label="4.0" />
      </Box>
    </Box>
  );
}
