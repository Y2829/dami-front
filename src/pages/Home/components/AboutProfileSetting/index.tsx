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

interface AboutProfileSettingProps {
  sx?: SxProps;
}

export default function AboutProfileSetting({ sx }: AboutProfileSettingProps) {
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
        <Typography>본인의 프로필을 완성하여 아띠가 되어보세요.</Typography>
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
          onClick={() => navigate("/user/me")}
        >
          프로필 완성하러 가기
        </Button>
      </CardActions>
    </Card>
  );
}
