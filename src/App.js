import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Men,
  Women,
  Unisex,
  Kids,
  BestSellers,
  NewArrivals,
  Offers,
  NotFound,
} from "./pages";

const LazyHome = React.lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <React.Suspense fallback="Loading...." className="loading">
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/unisex" element={<Unisex />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/best-Sellers" element={<BestSellers />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
