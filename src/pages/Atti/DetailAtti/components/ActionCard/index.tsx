import { Card, Box, Button, Typography } from "@mui/material";

import { GradeLabel } from "src/components/common/AttiInfoItem";

interface ActionCardProps {
  rating: string;
  accumulated_game_count: number;
  onClickChat: () => void;
  onClickJoin: () => void;
}

export default function ActionCard({
  rating,
  accumulated_game_count,
  onClickChat,
  onClickJoin,
}: ActionCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        padding: 2,
        mt: 4,
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <GradeLabel grade={rating} />
        <Typography
          sx={{
            ml: 2,
            fontWeight: 600,
          }}
        >
          같이한 게임 수: {accumulated_game_count}
        </Typography>
      </Box>

      <Box>
        <Button variant="contained" color="error" onClick={onClickChat}>
          채팅하기
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: 2,
          }}
          onClick={onClickJoin}
        >
          같이하기
        </Button>
      </Box>
    </Card>
  );
}
