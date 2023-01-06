import type { Review } from "src/types/review";

import { Box, Typography, Divider } from "@mui/material";

import { StarItems } from "src/components/common/AttiInfoItem";

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box flex={1}>
        <StarItems rating={review.rating} />
      </Box>

      <Box flex={1}>
        <Typography>{review.user.name}</Typography>
      </Box>
      <Box flex={3}>
        <Typography>{review.content}</Typography>
      </Box>
    </Box>
  );
}
