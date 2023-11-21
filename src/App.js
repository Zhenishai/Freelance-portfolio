import "./styles/main.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Coontacts";
import Project from "./pages/Pproject";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/ScrollToTop"


function App() {
  return (
    <div className="App">
  <Router>
          <ScrollToTop/>
           <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contacts" element={<Contacts/>} />
    <Route path="/project/:id" element={<Project/>} />
  </Routes>
           <Footer/>
  </Router>
     
    </div>
  );
}

export default App;
