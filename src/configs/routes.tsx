import { RouteItem } from "src/types/common";

import HomeIcon from "@mui/icons-material/Home";

import Home from "src/pages/Home";

const ROUTES: Array<RouteItem> = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
    component: <Home />,
  },
];

export default ROUTES;
