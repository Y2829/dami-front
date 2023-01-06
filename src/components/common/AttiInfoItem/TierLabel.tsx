import type { SxProps } from "@mui/material";
import type { Tier } from "src/types/lol";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import IconWithLabel from "src/components/common/IconWithLabel";
import { TIER_MAP } from "src/configs/lol";

interface TierLabelProps {
  tier: Tier;
  sx?: SxProps;
}

export default function TierLabel({ tier, sx }: TierLabelProps) {
  return (
    <IconWithLabel
      IconComponent={<EmojiEventsIcon sx={{ color: TIER_MAP[tier].color }} />}
      label={TIER_MAP[tier].label}
      sx={{
        marginRight: 1,
        ...sx,
      }}
    />
  );
}
