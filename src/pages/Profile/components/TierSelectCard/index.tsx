import type { Tier } from "src/types/lol";
import { Card } from "@mui/material";

import TierSelect from "src/components/common/SelectList/TierSelect";

interface TierSelectCardProps {
  value: Tier | null;
  onSelect: (value: Tier | null) => void;
}

export default function TierSelectCard({
  value,
  onSelect,
}: TierSelectCardProps) {
  return (
    <Card
      sx={{
        padding: 2,
        height: "74px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TierSelect value={value} onSelect={onSelect} />
    </Card>
  );
}
