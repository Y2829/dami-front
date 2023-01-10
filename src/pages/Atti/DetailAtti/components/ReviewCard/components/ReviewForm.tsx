import { useState } from "react";
import { Card, Box, Button, Typography, TextField } from "@mui/material";

import StarSelect from "src/components/common/SelectList/StarSelect";

interface ReviewFormProps {
  onSubmit: (rating: number, content: string) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [star, setStar] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  const handleClickStar = (value: number) => {
    setStar(value);
  };

  const handleClickSubmit = () => {
    if (star === 0) {
      return;
    }
    if (content === "") {
      return;
    }
    onSubmit(star, content);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StarSelect value={star} onClick={handleClickStar} />
        <TextField
          onChange={(e) => setContent(e.target.value)}
          sx={{
            ml: 2,
          }}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="warning"
        sx={{
          color: "#fff",
        }}
        disabled={star === 0 || content === ""}
        onClick={handleClickSubmit}
      >
        제출
      </Button>
    </Box>
  );
}
