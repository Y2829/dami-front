import type { SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

import palette from "src/theme/palette";

interface AboutServiceProps {
  sx?: SxProps;
}

export default function AboutService({ sx }: AboutServiceProps) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: palette.primary.main,
            }}
          >
            DAMI
          </Typography>
          <Typography>
            는 리그오브레전드(LOL)게임을 같이할 친구(아띠)를 찾아주는
            서비스입니다.
          </Typography>
        </Box>
        <Typography
          sx={{
            mt: 2,
          }}
        >
          다양한 아띠들과 함께 게임을 하며 즐겨보세요.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          padding: 4,
        }}
      >
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/atti/list")}
        >
          아띠 찾으러 가기
        </Button>
      </CardActions>
    </Card>
  );
}
