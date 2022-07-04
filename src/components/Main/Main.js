import "./Main.css";
import WhatsAppButton from "../WhatsApp-button/WhatsAppButton";
import Home from "../Home/Home";
import Us from "../Us/Us";
import Services from "../Services/Services"
import Contact from "../Contact/Contact"
import Testimonials from "../Testimonials/Testimonials";

const Main = () => {
  return (
    <>
      <WhatsAppButton />
      <div className="main">
        <Home />
        <Us />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Main;
