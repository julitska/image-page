import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </>
  );
}

export default App;
