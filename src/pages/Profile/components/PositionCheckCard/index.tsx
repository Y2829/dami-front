import type { Position } from "src/types/lol";
import { Card } from "@mui/material";

import PositionCheck from "src/components/common/CheckList/PositionCheck";

interface PositionCheckCardProps {
  checkedValues: Set<Position>;
  onCheck: (value: Position) => void;
}

export default function PositionCheckCard({
  checkedValues,
  onCheck,
}: PositionCheckCardProps) {
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <PositionCheck checkedValues={checkedValues} onCheck={onCheck} />
    </Card>
  );
}
