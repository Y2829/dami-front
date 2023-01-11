import { Card, TextField } from "@mui/material";

interface IntroTextCardProps {
  value: string;
  onChange: (newValue: string) => void;
}

export default function IntroTextCard({ value, onChange }: IntroTextCardProps) {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Card>
  );
}
