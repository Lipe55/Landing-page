import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Contact />
      </main>
    </>
  );
}

export default App;