import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindOmpangi from "../pages/FindOmpangi";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindOmpangi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
