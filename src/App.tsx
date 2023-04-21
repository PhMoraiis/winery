import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logon from "./pages/Logon";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f6f6f6]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/logon" element={<Logon />} />*/}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
