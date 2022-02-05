import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
import AllProjects from "./components/AllProjects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Jumbo />
          <Services />
          <Portfolio />
          <About />
          <Skills />
          <Team />
          <Contact />
        </Route>
        <Route exact path="/all-projects">
          <AllProjects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
