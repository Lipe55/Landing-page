import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About /> 
        <Services />
      </main>
    </>
  );
}

export default App;