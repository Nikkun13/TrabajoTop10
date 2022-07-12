import "./Contact.css";

const Contact = () => {
  return (
    <div id="contacto" className="seccion">
      <div className="escribenos">
        <h4 className="contactTituloUno">
          ¿Tienes un proyecto o idea en mente que necesites ayuda?
        </h4>
        <h2 className="contactTituloDos">¡Escríbenos!</h2>
        <h5 className="contactMail">ortizpellegrinifrancisco@gmail.com</h5>
      </div>

      {/* */}

      <div className="formAndContact">
        <section className="contacto">
          <h5 className="contForm">Contacto</h5>
          <span>cordoba</span>
          <span>+548965664</span>
          <div>
            <h5 className="contForm">Siguenos</h5>
            <buton>icon</buton>
            <buton>icon</buton>
            <buton>icon</buton>
          </div>
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
                />
              </li>

              <li className="Email">
                <input
                  className="mailForm"
                  placeholder="Email"
                  type="email"
                  id="mail"
                  name="user_mail"
                />
              </li>
              <li className="Phone">
                <input
                  className="telephoneForm"
                  placeholder="Telefono"
                  type="number"
                  id="telephone"
                  name="user_telephone"
                />
              </li>

              <li className="Msg">
                <input
                  placeholder="Mensaje"
                  className="textForm"
                  id="msg"
                  name="user_message"
                ></input>
              </li>
              <button className="Button">flecha</button>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
