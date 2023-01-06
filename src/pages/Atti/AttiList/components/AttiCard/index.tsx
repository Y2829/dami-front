import { Link } from "react-router-dom";
import { Box, Card } from "@mui/material";

import ProfileImage from "./ProfileImage";
import AttiInfo from "./AttiInfo";
import IntroduceBox from "./IntroduceBox";
import Audio from "src/components/common/Audio";

const content =
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function AttiCard() {
  return (
    <Link to="/atti/1" state={{ id: 1 }} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: "600px",
          height: "300px",
          display: "flex",
        }}
      >
        <ProfileImage />
        <Box
          sx={{
            width: "100%",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <AttiInfo />
          <IntroduceBox content={content} />
          <Audio audioSrc="" />
        </Box>
      </Card>
    </Link>
  );
}
