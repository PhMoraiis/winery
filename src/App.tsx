import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NewWinery from "./pages/NewWinery";
import EditWinery from "./pages/EditWinery";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newwinery" element={<NewWinery />} />
          <Route path="/winery/:id" element={<EditWinery />} />
        </Routes>
      <Footer />
    </Router>
  )
}
export default App
