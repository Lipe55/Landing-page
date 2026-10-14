import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services onSelectService={setSelectedService} />
        <Projects />
        <Quote
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />
        <Location />
        <Contact />
      </main>
    </>
  );
}

export default App;