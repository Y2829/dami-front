import type { SxProps } from "@mui/material";
import { Card, CardContent } from "@mui/material";

interface AboutAttiProps {
  sx?: SxProps;
}

export default function AboutAtti({ sx }: AboutAttiProps) {
  return (
    <Card
      sx={{
        ...sx,
      }}
    >
      <CardContent>about Atti</CardContent>
    </Card>
  );
}
