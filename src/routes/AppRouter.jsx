import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";

import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
