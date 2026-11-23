import Header from "./components/Header";
import Hero from "./components/Hero";
import Space from "./components/Space";
import Classes from "./components/Classes";
import Pricing from "./components/Pricing";
import Schedule from "./components/Scedule";
import Faq from "./components/Faq";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Classes />
        <Space />
        <Pricing />
        <Schedule />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

export default App;
