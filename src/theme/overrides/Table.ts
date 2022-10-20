import palette from "../palette";

export default function Table() {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: palette.text.secondary,
          backgroundColor: palette.background.neutral,
        },
      },
    },
  };
}
