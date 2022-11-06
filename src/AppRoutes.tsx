import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ROUTES from "./configs/routes";

const AppRoutes = () => {
  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {ROUTES.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default AppRoutes;
