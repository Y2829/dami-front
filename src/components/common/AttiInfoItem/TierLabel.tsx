import type { Tier } from "src/pages/Atti/AttiList/components/FilterGroup/FilterItems/TierSelect";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import IconWithLabel from "src/components/common/IconWithLabel";
import { TIER_MAP } from "src/configs/tier";

interface TierLabelProps {
  tier: Tier;
}

export default function TierLabel({ tier }: TierLabelProps) {
  return (
    <IconWithLabel
      IconComponent={<EmojiEventsIcon sx={{ color: TIER_MAP[tier].color }} />}
      label={TIER_MAP[tier].label}
      sx={{
        marginRight: 1,
      }}
    />
  );
}
