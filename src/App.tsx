import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/newproject" element={<NewProject />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/project/:id" element={<EditProject />} /> */}
      </Routes >
    </Router>
  )
}

export default App