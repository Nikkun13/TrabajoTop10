import "./Testimonials.css"

const Testimonials = () => {

    return (
        <div id="testimonios"  className="seccion">
            <h1>TESTIMONIOS</h1>
            <div className="wrapper">
                <div className="sliderTestimonial">
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★★</spam><spam className="estrellasSinPintar">★</spam>
                            <h6 className="nombreTestimonio">Rocio</h6>
                        </div>
                    </div>
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★</spam><spam className="estrellasSinPintar">★★</spam>
                            <h6 className="nombreTestimonio">Fernando</h6>
                        </div>
                    </div>
                    <div className="testimonioItem">
                        <div className="testimonioCliente">
                            <h4 className="testimonio">Estamos muy contentos porque las clases son muy lúdicas, a través del juego y de canciones (...) Os animamos a venir.”</h4>
                            <spam className="estrellasPintadas">★★★★★</spam>
                            <h6 className="nombreTestimonio">Gustavo</h6>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        // Aun sin terminar. Siguiendo tutorial de https://www.youtube.com/watch?v=pUR0cNL4NU4


    )
}

export default Testimonials