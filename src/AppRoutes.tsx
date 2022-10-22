import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default AppRoutes;
