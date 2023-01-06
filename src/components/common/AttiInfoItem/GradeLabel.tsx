import type { SxProps } from "@mui/material";
import IconWithLabel from "src/components/common/IconWithLabel";

import StarIcon from "@mui/icons-material/Star";

interface GradeLabelProps {
  grade: string;
  sx?: SxProps;
}

export default function GradeLabel({ grade, sx }: GradeLabelProps) {
  return (
    <IconWithLabel
      IconComponent={<StarIcon sx={{ color: "#ffaa00", fontSize: "32px" }} />}
      label={grade}
      sx={{
        ...sx,
      }}
    />
  );
}
