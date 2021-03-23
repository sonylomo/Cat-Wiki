import "./App.css";
import Home from "./pages/welcome/home";
import About from "./pages/welcome/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Wiki from './pages/wiki/wiki'
// import Wikimedia from './pages/wiki/wikimedia'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/wiki/:breedName" >
            <Wiki/>
            {/* <Wikimedia/> */}
          </Route>
          <Route exact path="/">
            <Home />
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
