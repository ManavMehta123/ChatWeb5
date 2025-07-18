import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoadingBig } from "./components/Loading";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
