import type { SxProps } from "@mui/material";
import { Card } from "@mui/material";

interface BaseCardProps {
  children?: JSX.Element | JSX.Element[];
  sx?: SxProps;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function BaseCard({
  children,
  sx,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: BaseCardProps) {
  return (
    <Card
      sx={{
        width: "200px",
        height: "200px",
        ...sx,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Card>
  );
}
