import PersonIcon from "@mui/icons-material/Person";

import IconWithLabel from "src/components/common/IconWithLabel";

interface FollowerLabelProps {
  followerCount: number;
}

export default function FollowerLabel({ followerCount }: FollowerLabelProps) {
  return (
    <IconWithLabel IconComponent={<PersonIcon />} label={`${followerCount}`} />
  );
}
