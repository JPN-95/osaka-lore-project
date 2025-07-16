import Map from "./Map";
import ContactForm from "./ContactForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<ContactForm />}/>
      </Routes>
    </Router>
  );
}

export default App
