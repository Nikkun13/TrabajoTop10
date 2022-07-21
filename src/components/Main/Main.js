import "./Main.css";
import WhatsAppButton from "../WhatsApp-button/WhatsAppButton";
import Home from "../Home/Home";
import Us from "../Us/Us";
import Portfolio from "../Portfolio/Portfolio"
import Contact from "../Contact/Contact"
import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Main = () => {

  return (
    <>
      <WhatsAppButton />
      <Header />
      <div className="main">
        <Home />
        <Us />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Main;
