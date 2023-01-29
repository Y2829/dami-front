import AddIcon from "@mui/icons-material/Add";

import BaseCard from "./BaseCard";

interface AddCardProps {
  onClick: () => void;
}

export default function AddCard({ onClick }: AddCardProps) {
  return (
    <BaseCard
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <AddIcon
        sx={{
          fontSize: "48px",
        }}
      />
    </BaseCard>
  );
}
