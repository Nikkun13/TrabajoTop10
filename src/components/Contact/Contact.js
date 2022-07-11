import "./Contact.css";

const Contact = () => {

    return (
        <div id="contacto"  className="seccion">
            <h4 className="contactTituloUno">¿Tienes un proyecto o idea en mente que necesites ayuda?</h4>
            <h2 className="contactTituloDos">¡Escríbenos!</h2>
            <h5 className="contactMail">ortizpellegrinifrancisco@gmail.com</h5>
            <div className="contenedorFormulario">
                <p className="contForm">Contacto</p>
                <form action="/my-handling-form-page" method="post">
                    <ul>
                        <li>
                            <input className="nombreForm" type="text" id="name" name="user_name"/>
                        </li>
                        <li>
                            <input className="mailForm" type="email" id="mail" name="user_mail"/>
                        </li>
                        <li>
                            <textarea className="textForm" id="msg" name="user_message"></textarea>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Contact