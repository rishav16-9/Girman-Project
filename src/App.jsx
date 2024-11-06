import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./features/Navbar";
import { lazy, Suspense } from "react";
function App() {
  const homeComp = lazy(() => import("./features/Home/Home"));
  const searchComp = lazy(() => import("./features/Search/Search"));
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={homeComp} />
          <Route path="/search" Component={searchComp} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
