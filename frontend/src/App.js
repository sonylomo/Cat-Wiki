import "./App.css";
import Home from "./pages/welcome/home";
import About from "./pages/welcome/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Wiki from './pages/wiki/wiki'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route path="/">
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
