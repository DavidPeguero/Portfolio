import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Header from "/src/components/Header"
import Builds from './pages/Builds';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Builds" element={<Builds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
