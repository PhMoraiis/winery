import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logon from "./pages/Manager";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EditWinery from "./pages/EditWinery";
import NewWinery from "./pages/NewWinery";

function App() {
  return (
    <div className="bg-[#f6f6f6]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/winerymng" element={<Logon />} />
          <Route path="/winery/:id" element={<EditWinery />} />
          <Route path="/winerynew" element={<NewWinery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
