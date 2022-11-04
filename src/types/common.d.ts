import type { Element } from "react";
import type { SvgIcon } from "@mui/icons-material";

interface RouteItem {
  name: string;
  path: string;
  icon: SvgIcon;
  component: Element;
}
