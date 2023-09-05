import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Tech } from "./Pages/Tech";
import { Projects } from "./Pages/Projects";
import { Info } from "./Pages/Info";
import { Page404 } from "./Pages/Page404";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/info" element={<Info />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
