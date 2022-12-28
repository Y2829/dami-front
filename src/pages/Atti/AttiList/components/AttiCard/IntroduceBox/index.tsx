import { Box, Typography } from "@mui/material";

interface IntroduceBoxProps {
  content: string;
}

export default function IntroduceBox({ content }: IntroduceBoxProps) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}
