// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbo />
      {/* <Services /> */}
      <Portfolio />
      {/* <About /> */}
      <Skills />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
