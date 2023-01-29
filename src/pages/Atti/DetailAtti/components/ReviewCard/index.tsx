import type { ReviewList } from "src/types/review";

import { Card, Box, Button, Typography, TextField } from "@mui/material";

import ReviewForm from "./components/ReviewForm";
import ReviewListContainer from "./components/ReviewListContainer";

interface ReviewCardProps {
  reviewList: ReviewList;
}

export default function ReviewCard({ reviewList }: ReviewCardProps) {
  const handleClickSubmit = (rating: number, content: string) => {
    console.log(rating, content);
  };
  return (
    <Card
      sx={{
        padding: 2,
        mt: 4,
      }}
    >
      <ReviewForm onSubmit={handleClickSubmit} />
      <ReviewListContainer reviewList={reviewList} />
    </Card>
  );
}
