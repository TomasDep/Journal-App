import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
