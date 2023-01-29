import type { FC } from "react";

import { Box, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";

import palette from "src/theme/palette";

const ChargedCoin: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        marginTop: "8px",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: palette.grey[300],
        },
      }}
    >
      <WalletIcon
        sx={{
          color: palette.grey[500],
          fontSize: "24px",
        }}
      />
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          marginLeft: 2,
        }}
      >
        100
      </Typography>
    </Box>
  );
};

export default ChargedCoin;
