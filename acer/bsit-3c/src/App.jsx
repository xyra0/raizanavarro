import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./assets/components/Navigation";
import Footer from "./assets/components/Footer";

import Home from "./assets/pages/Home";
import Gallery from "./assets/pages/Gallery";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;