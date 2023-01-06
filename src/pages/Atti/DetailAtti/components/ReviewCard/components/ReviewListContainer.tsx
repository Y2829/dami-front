import type { ReviewList } from "src/types/review";
import { Box } from "@mui/material";

import ReviewItem from "./ReviewItem";

interface ReviewListContainerProps {
  reviewList: ReviewList;
}

export default function ReviewListContainer({
  reviewList,
}: ReviewListContainerProps) {
  return (
    <Box>
      {reviewList.map((review) => (
        <ReviewItem review={review} />
      ))}
    </Box>
  );
}
