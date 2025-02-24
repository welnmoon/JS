import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />{" "}
        {/* utils/ScrollToTop.js - чтобы скролл сбрасывался при навигации */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
