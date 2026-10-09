import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Method from "./Components/Method";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="landing-page">
        <Header />
        <Hero />
        <About />
        <Method />
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </div>



      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App