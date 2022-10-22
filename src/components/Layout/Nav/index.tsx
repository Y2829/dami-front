import type { FC } from "react";

import { Box, Drawer } from "@mui/material";

import { NAV_BAR_WIDTH } from "src/configs";

const Nav: FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_BAR_WIDTH },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: NAV_BAR_WIDTH,
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          },
        }}
      >
        <h2>navbar</h2>
      </Drawer>
    </Box>
  );
};

export default Nav;
