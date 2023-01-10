import { Card, TextField } from "@mui/material";

export default function IntroTextCard() {
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <TextField
        multiline
        fullWidth
        rows={8}
        placeholder="본인을 소개해주세요."
      />
    </Card>
  );
}
