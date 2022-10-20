import type { Theme } from "@mui/material/styles";
import Card from "./Card";
import Paper from "./Paper";
import Input from "./Input";
import Table from "./Table";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import Autocomplete from "./Autocomplete";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Card(theme),
    Table(),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(),
    Typography(theme),
    Autocomplete()
  );
}
