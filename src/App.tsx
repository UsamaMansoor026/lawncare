import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import ReviewForm from "./components/ReviewForm";
import Seasons from "./components/Seasons";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Seasons />
      <Contact />
      <Testimonials />
      <Articles />
      <Newsletter />
      <ReviewForm />
      <Footer />
    </main>
  );
};

export default App;
