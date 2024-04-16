import "./index.css";
import { Toaster } from "react-hot-toast";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Success from "./Pages/Success/Success";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Toaster />
  </Router>
  );
};

export default App;
