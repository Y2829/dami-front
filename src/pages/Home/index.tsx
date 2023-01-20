import type { SxProps } from "@mui/material";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";

import palette from "src/theme/palette";
import AboutAtti from "./components/AboutAtti";
import AboutService from "./components/AboutService";
import AboutProfileSetting from "./components/AboutProfileSetting";

const ABOUT_COMPONENT_LENGTH = 3;

export default function Home() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const commonSx: SxProps = {
    width: "90%",
    height: "400px",
    animationName: "fade",
    animationDuration: "1.5s",
    "@keyframes fade": {
      from: {
        opacity: 0.4,
      },
      to: {
        opacity: 1,
      },
    },
  };

  const handleClick = (nextIdx: number) => {
    if (nextIdx < 0) {
      setCurrentIdx(ABOUT_COMPONENT_LENGTH - 1);
      return;
    }

    if (nextIdx >= ABOUT_COMPONENT_LENGTH) {
      setCurrentIdx(0);
      return;
    }

    setCurrentIdx(nextIdx);
  };

  const slideItems = [
    <AboutService
      sx={{ display: currentIdx === 0 ? "flex" : "none", ...commonSx }}
    />,
    <AboutAtti
      sx={{ display: currentIdx === 1 ? "flex" : "none", ...commonSx }}
    />,
    <AboutProfileSetting
      sx={{ display: currentIdx === 2 ? "flex" : "none", ...commonSx }}
    />,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "32px 128px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={() => handleClick(currentIdx - 1)}>
          <ArrowBackIosNewIcon sx={{ color: palette.primary.main }} />
        </IconButton>

        {slideItems.map((slideItem) => slideItem)}

        <IconButton onClick={() => handleClick(currentIdx + 1)}>
          <ArrowForwardIosIcon sx={{ color: palette.primary.main }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {Array.from({ length: ABOUT_COMPONENT_LENGTH }).map((_, idx) => (
          <CircleIcon
            sx={{
              mx: 1,
              cursor: "pointer",
              fontSize: "16px",
              color:
                idx === currentIdx
                  ? palette.primary.main
                  : palette.primary.lighter,
            }}
            onClick={() => handleClick(idx)}
          />
        ))}
      </Box>
    </Box>
  );
}
