import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";

interface IconWidthLabelProps {
  IconComponent: JSX.Element;
  label: string;
  sx?: SxProps;
}

export default function IconWithLabel({
  IconComponent,
  label,
  sx,
}: IconWidthLabelProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      {IconComponent}
      <Typography>{label}</Typography>
    </Box>
  );
}
