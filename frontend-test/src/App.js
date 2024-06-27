import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Qoutation from './components/Qoutation/Qoutation'
import Info from './components/Info/Info';
import Cards from "./components/Cards/Cards"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Qoutation />
      <Info />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
