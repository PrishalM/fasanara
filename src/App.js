import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages";
import { default as Layout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
