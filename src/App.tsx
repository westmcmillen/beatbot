import { Route, Routes } from "react-router-dom";

import BeatBot from "./pages/BeatBot";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="fixed inset-0 bg-neutral-50 select-none">
      <Routes>
        <Route path="/" element={<BeatBot />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
