import './App.css';
import Home from './pages/welcome/home'
import About from './pages/welcome/about'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
