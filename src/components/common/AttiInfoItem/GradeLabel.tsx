import IconWithLabel from "src/components/common/IconWithLabel";

import StarIcon from "@mui/icons-material/Star";

interface GradeLabelProps {
  grade: string;
}

export default function GradeLabel({ grade }: GradeLabelProps) {
  return <IconWithLabel IconComponent={<StarIcon />} label={grade} />;
}
