import "./Contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

const Contact = () => {
  const { width } = useScreenSize();

  const [mensaje, setMensaje] = useState("Copiar email");
  const copiar = () => {
    setMensaje("¡email copiado!");
    setTimeout(() => {
      setMensaje("Copiar email");
    }, 3000);
  };

  const burbuja = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    if (e.target.className === "contactMail") {
      e.target.children[0].style.top = y - 50 + "px";
      e.target.children[0].style.left = x - 80 + "px";
    }
  };

  const validar = (e) => {
    console.log(e.target.name);
    if (
      e.target.name === "nombre" &&
      e.target.value.length > 0 &&
      e.target.value.length < 3
    ) {
      e.target.style.borderColor = "#8B22DE";
      e.target.nextSibling.style.opacity = 1;
    } else if (
      e.target.value.length > 0 &&
      e.target.value.length < 5 &&
      e.target.name !== "nombre"
    ) {
      e.target.style.borderColor = "#8B22DE";
      e.target.nextSibling.style.opacity = 1;
    } else {
      e.target.style.borderColor = "";
      e.target.nextSibling.style.opacity = 0;
    }
  };
  return (
    <div id="contacto">
      <div className="escribenos seccion">
        <h4 className="contactTituloUno">
          ¿Tienes un proyecto o idea en mente que necesites ayuda?
        </h4>
        <h2 className="contactTituloDos">¡Escríbenos!</h2>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h5 className="contactMail" onMouseMove={burbuja} onClick={copiar}>
            ortizpellegrinifrancisco@gmail.com
            <CopyToClipboard text="ortizpellegrinifrancisco@gmail.com">
              <button className="mail">{mensaje}</button>
            </CopyToClipboard>
          </h5>
        </div>
      </div>

      {/* */}

      <div className="formAndContact">
        <section className="contacto">
          <h5 className="contForm">Contacto</h5>
          {width > 767 && (
            <>
              <a
                target="blank"
                href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.399084,-64.3344302,11z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761"
              >
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8337 14.9171L9 20.7508L3.16634 14.9171C2.01256 13.7633 1.22684 12.2933 0.908518 10.693C0.590198 9.09261 0.753581 7.43382 1.37801 5.92633C2.00243 4.41885 3.05986 3.13038 4.41656 2.22386C5.77326 1.31735 7.36831 0.833496 9 0.833496C10.6317 0.833496 12.2267 1.31735 13.5834 2.22386C14.9401 3.13038 15.9976 4.41885 16.622 5.92633C17.2464 7.43382 17.4098 9.09261 17.0915 10.693C16.7732 12.2933 15.9874 13.7633 14.8337 14.9171ZM9 10.9168C9.48623 10.9168 9.95255 10.7236 10.2964 10.3798C10.6402 10.036 10.8333 9.56965 10.8333 9.08342C10.8333 8.59719 10.6402 8.13088 10.2964 7.78706C9.95255 7.44325 9.48623 7.25009 9 7.25009C8.51377 7.25009 8.04746 7.44325 7.70364 7.78706C7.35982 8.13088 7.16667 8.59719 7.16667 9.08342C7.16667 9.56965 7.35982 10.036 7.70364 10.3798C8.04746 10.7236 8.51377 10.9168 9 10.9168Z"
                    fill="#E3B6F9"
                  />
                </svg>
                Córdoba, Argetina
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=543512609595&text=Hola%21%20"
                target="blank"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.634 3.98497C13.234 0.0999692 8.33401 -1.05503 4.53401 1.35997C0.834008 3.77497 -0.365992 9.02497 2.03401 12.91L2.23401 13.225L1.43401 16.375L4.43401 15.535L4.73401 15.745C6.03401 16.48 7.43401 16.9 8.83401 16.9C10.334 16.9 11.834 16.48 13.134 15.64C16.834 13.12 17.934 7.97497 15.634 3.98497ZM13.534 12.07C13.134 12.7 12.634 13.12 11.934 13.225C11.534 13.225 11.034 13.435 9.03401 12.595C7.33401 11.755 5.93401 10.39 4.93401 8.81497C4.33401 8.07997 4.03401 7.13497 3.93401 6.18997C3.93401 5.34997 4.23401 4.61497 4.73401 4.08997C4.93401 3.87997 5.13401 3.77497 5.33401 3.77497H5.83401C6.03401 3.77497 6.23401 3.77497 6.33401 4.19497C6.53401 4.71997 7.03401 5.97997 7.03401 6.08497C7.13401 6.18997 7.13401 6.39997 7.03401 6.50497C7.13401 6.71497 7.03401 6.92497 6.93401 7.02997C6.83401 7.13497 6.73401 7.34497 6.63401 7.44997C6.43401 7.55497 6.33401 7.76497 6.43401 7.97497C6.83401 8.60497 7.33401 9.23497 7.83401 9.75997C8.43401 10.285 9.03401 10.705 9.73401 11.02C9.93401 11.125 10.134 11.125 10.234 10.915C10.334 10.705 10.834 10.18 11.034 9.96997C11.234 9.75997 11.334 9.75997 11.534 9.86497L13.134 10.705C13.334 10.81 13.534 10.915 13.634 11.02C13.734 11.335 13.734 11.755 13.534 12.07Z"
                    fill="#E3B6F9"
                  />
                </svg>
                +54 351 2609595
              </a>
            </>
          )}
        </section>

        {/* */}
        <div className="form">
          <form
            action="https://formsubmit.co/ortizpellegrinifrancisco@gmail.com"
            method="POST"
          >
            <ul className="container">
              <li className="Name">
                <input
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Introduce tu nombre")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="nombreForm"
                  placeholder="Nombre y apellidos"
                  type="text"
                  id="name"
                  name="nombre"
                  required
                  onChange={validar}
                />
                <label style={{ opacity: 0 }}>Introduce tu nombre *</label>
              </li>

              <li className="Email">
                <input
                  onChange={validar}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Introduce tu e-mail")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="mailForm"
                  placeholder="E-mail"
                  type="email"
                  id="mail"
                  required
                />
                <label style={{ opacity: 0 }}>E-mail obligatorio *</label>
              </li>
              <li className="Phone">
                <input
                  className="telephoneForm"
                  placeholder="Teléfono"
                  type="number"
                  id="telephone"
                  name="teléfono"
                  pattern=".{5,10}"
                />
              </li>
              <li className="Asunto">
                <input
                  onChange={validar}
                  className="asuntoForm"
                  placeholder="Asunto"
                  id="Asunto"
                  name="Asunto"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Introduce un asunto")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
                <label style={{ opacity: 0 }}>Introduce un asunto *</label>
              </li>
              <li className="Msg">
                <textarea
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Introduce tu mensaje")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  placeholder="Mensaje"
                  className="textForm"
                  id="msg"
                  name="mensaje"
                  required
                  onChange={validar}
                ></textarea>
                <label style={{ opacity: 0 }}>Introduce tu mensaje *</label>
              </li>
              <li style={{ display: "none" }}>
                <input
                  className="telephoneForm"
                  placeholder="Teléfono"
                  type="number"
                  id="telephone"
                  name="teléfono"
                />
              </li>
              <button type="submit" className="Button">
                Enviar
              </button>
            </ul>
          </form>
        </div>
      </div>
      {width < 767 && (
        <div
          className="contacto"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <a
            target="blank"
            href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.399084,-64.3344302,11z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761"
          >
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8337 14.9171L9 20.7508L3.16634 14.9171C2.01256 13.7633 1.22684 12.2933 0.908518 10.693C0.590198 9.09261 0.753581 7.43382 1.37801 5.92633C2.00243 4.41885 3.05986 3.13038 4.41656 2.22386C5.77326 1.31735 7.36831 0.833496 9 0.833496C10.6317 0.833496 12.2267 1.31735 13.5834 2.22386C14.9401 3.13038 15.9976 4.41885 16.622 5.92633C17.2464 7.43382 17.4098 9.09261 17.0915 10.693C16.7732 12.2933 15.9874 13.7633 14.8337 14.9171ZM9 10.9168C9.48623 10.9168 9.95255 10.7236 10.2964 10.3798C10.6402 10.036 10.8333 9.56965 10.8333 9.08342C10.8333 8.59719 10.6402 8.13088 10.2964 7.78706C9.95255 7.44325 9.48623 7.25009 9 7.25009C8.51377 7.25009 8.04746 7.44325 7.70364 7.78706C7.35982 8.13088 7.16667 8.59719 7.16667 9.08342C7.16667 9.56965 7.35982 10.036 7.70364 10.3798C8.04746 10.7236 8.51377 10.9168 9 10.9168Z"
                fill="#E3B6F9"
              />
            </svg>
            Córdoba, Argetina
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543512609595&text=Hola%21%20"
            target="blank"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.634 3.98497C13.234 0.0999692 8.33401 -1.05503 4.53401 1.35997C0.834008 3.77497 -0.365992 9.02497 2.03401 12.91L2.23401 13.225L1.43401 16.375L4.43401 15.535L4.73401 15.745C6.03401 16.48 7.43401 16.9 8.83401 16.9C10.334 16.9 11.834 16.48 13.134 15.64C16.834 13.12 17.934 7.97497 15.634 3.98497ZM13.534 12.07C13.134 12.7 12.634 13.12 11.934 13.225C11.534 13.225 11.034 13.435 9.03401 12.595C7.33401 11.755 5.93401 10.39 4.93401 8.81497C4.33401 8.07997 4.03401 7.13497 3.93401 6.18997C3.93401 5.34997 4.23401 4.61497 4.73401 4.08997C4.93401 3.87997 5.13401 3.77497 5.33401 3.77497H5.83401C6.03401 3.77497 6.23401 3.77497 6.33401 4.19497C6.53401 4.71997 7.03401 5.97997 7.03401 6.08497C7.13401 6.18997 7.13401 6.39997 7.03401 6.50497C7.13401 6.71497 7.03401 6.92497 6.93401 7.02997C6.83401 7.13497 6.73401 7.34497 6.63401 7.44997C6.43401 7.55497 6.33401 7.76497 6.43401 7.97497C6.83401 8.60497 7.33401 9.23497 7.83401 9.75997C8.43401 10.285 9.03401 10.705 9.73401 11.02C9.93401 11.125 10.134 11.125 10.234 10.915C10.334 10.705 10.834 10.18 11.034 9.96997C11.234 9.75997 11.334 9.75997 11.534 9.86497L13.134 10.705C13.334 10.81 13.534 10.915 13.634 11.02C13.734 11.335 13.734 11.755 13.534 12.07Z"
                fill="#E3B6F9"
              />
            </svg>
            +54 351 2609595
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
