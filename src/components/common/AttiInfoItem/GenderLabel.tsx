import type { Gender } from "src/types/user";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

interface GenderLabelProps {
  gender: Gender;
}

export default function GenderLabelProps({ gender }: GenderLabelProps) {
  return (
    <>
      {gender === "MALE" ? (
        <MaleIcon
          sx={{
            color: "#0066ff",
          }}
        />
      ) : (
        <FemaleIcon sx={{ color: "#ff00bf" }} />
      )}
    </>
  );
}
