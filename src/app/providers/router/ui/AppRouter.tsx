import MainLayout from "@/widgets/layouts/MainLayout/MainLayout";
import { MainPage } from "../../../../pages/MainPage";
import { NotFoundPage } from "../../../../pages/NotFoundPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MainLayout />
          </Suspense>
        }
      >
        <Route index element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
