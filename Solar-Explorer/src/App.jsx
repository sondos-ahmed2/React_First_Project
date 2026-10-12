import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Planets from "./components/Planets/Planets";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <Router>
      <div className="container mt-4 d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Planets" element={<Planets />} />
          <Route path="/Planets/:id" element={<PlanetDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
