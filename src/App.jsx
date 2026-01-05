import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Article from "./components/sections/Article";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";

function App() {
  return (
    <>
      <Navbar />{" "}
      <main className="pt-20 bg-[#040404]/60">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Article />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
