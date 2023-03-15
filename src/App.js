import './App.css';

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Cards from "./components/Cards";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Section1/>
        <Cards/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
