import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Mywork from './components/Mywork';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/skills" element={<Skills></Skills>}></Route>
          <Route exact path="/mywork" element={<Mywork></Mywork>}></Route>
          <Route exact path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
