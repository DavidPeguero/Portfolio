import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Navbar from "/src/components/Navbar"
import ScrollTop from "/src/components/ScrollTop"
import Resume from "./pages/Resume"
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
      <ScrollTop />
    </Router>
    
  )
}

export default App
