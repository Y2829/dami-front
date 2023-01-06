import { RouteItem } from "src/types/common";

import HomeIcon from "@mui/icons-material/Home";

import Home from "src/pages/Home";
import AttiList from "src/pages/Atti/AttiList";
import DetailAtti from "src/pages/Atti/DetailAtti";

const ROUTES: Array<RouteItem> = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
    component: <Home />,
    isNavigation: true,
  },
  {
    name: "아띠찾기",
    path: "/atti/list",
    component: <AttiList />,
    isNavigation: true,
  },
  {
    name: "아띠상세정보",
    path: "/atti/:id",
    component: <DetailAtti />,
    isNavigation: false,
  },
];

export default ROUTES;
