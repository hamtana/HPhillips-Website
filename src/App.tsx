import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./services";
import { Contact } from "./Contact";
import { FAQ } from "./faq";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 p-4 text-white flex justify-around">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-4">
          &copy; 2025 Phillip's Music & Tech. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
