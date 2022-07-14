import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Contact = () => {
  return (
    <div id="contacto">
      <div className="escribenos">
        <h4 className="contactTituloUno">
          ¿Tienes un proyecto o idea en mente que necesites ayuda?
        </h4>
        <h2 className="contactTituloDos">¡Escríbenos!</h2>
        <h5 className="contactMail">
          ortizpellegrinifrancisco@gmail.com
          <CopyToClipboard text="ortizpellegrinifrancisco@gmail.com">
            <button className="mail">Copiar Mail</button>
          </CopyToClipboard>
        </h5>
      </div>

      {/* */}

      <div className="formAndContact">
        <section className="contacto">
          <h5 className="contForm">Contacto</h5>
          <span>Cordoba</span>
          <span>+548965664</span>
        </section>

        {/* */}
        <div className="form">
          <form action="/my-handling-form-page" method="post">
            <ul className="container">
              <li className="Name">
                <input
                  className="nombreForm"
                  placeholder="Nombre y apellidos"
                  type="text"
                  id="name"
                  name="user_name"
                  required
                />
              </li>

              <li className="Email">
                <input
                  className="mailForm"
                  placeholder="Email"
                  type="email"
                  id="mail"
                  name="user_mail"
                  required
                />
              </li>
              <li className="Phone">
                <input
                  className="telephoneForm"
                  placeholder="Telefono"
                  type="number"
                  id="telephone"
                  name="user_telephone"
                  required
                />
              </li>

              <li className="Msg">
                <textarea
                  placeholder="Mensaje"
                  className="textForm"
                  id="msg"
                  name="user_message"
                  required
                ></textarea>
              </li>

              <li>
                <label>
                  <input type="checkbox" />
                </label>
                <label for="check1">Check me!</label>
              </li>

              <button className="Button">Enviar</button>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
