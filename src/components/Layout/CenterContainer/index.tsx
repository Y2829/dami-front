import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";

interface CenterContainerProps {
  children?: JSX.Element | JSX.Element[];
  sx?: SxProps;
}

export default function CenterContainer({
  children,
  sx,
}: CenterContainerProps) {
  return (
    <Box
      sx={{
        mt: 5,
        mx: 15,
        minWidth: "1200px",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
