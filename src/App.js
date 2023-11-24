import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
