import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NewProjects from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/newprojects" element={<NewProjects/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App