import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Navbar from "/src/components/Navbar"
import ScrollTop from "/src/components/ScrollTop"
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <ScrollTop />
    </BrowserRouter>
    
  )
}

export default App
