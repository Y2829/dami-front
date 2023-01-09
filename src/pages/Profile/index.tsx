import { Box } from "@mui/material";

import CenterContainer from "src/components/Layout/CenterContainer";

import ProfileImageSetting from "./components/ProfileImageSetting";

export default function Profile() {
  return (
    <CenterContainer>
      <ProfileImageSetting
        images={[
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
        ]}
      />
    </CenterContainer>
  );
}
