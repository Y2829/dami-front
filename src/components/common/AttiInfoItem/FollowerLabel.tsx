import type { SxProps } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import IconWithLabel from "src/components/common/IconWithLabel";

interface FollowerLabelProps {
  followerCount: number;
  sx?: SxProps;
}

export default function FollowerLabel({
  followerCount,
  sx,
}: FollowerLabelProps) {
  return (
    <IconWithLabel
      IconComponent={<PersonIcon />}
      label={`${followerCount}`}
      sx={sx}
    />
  );
}
