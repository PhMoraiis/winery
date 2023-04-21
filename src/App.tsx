import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewWinery from "./components/CrudWinery/CreateWinery";
import EditWinery from "./components/CrudWinery/UpdateWinery";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f6f6f6]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newwinery" element={<NewWinery />} />
          <Route path="/winery/:id" element={<EditWinery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
