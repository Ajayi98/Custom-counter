import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CustomCounterPage from "./components/CustomCounterPage";
import ErrorBoundary from "./components/ErrorBoundary";

import NotFound from "./components/NotFound";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomCounterPage />} />
        <Route exact path="/error" element={<ErrorBoundary />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
