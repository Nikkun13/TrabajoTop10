import "./Portfolio.css";

const Portfolio = () => {

    return (
        <div id="portfolio" className="portfolioSeccion">
        <div id="carouselExampleIndicators" class="carousel slide seccion" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800" class="d-block w-100" alt="Img1"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p>Fotografia/Producto</p>
                            <h2 class="text-primary bg-dark">PROYECTO 1</h2>
                            <p class="h4 text-primary bg-dark">Explicacion Proyecto 1</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://ep00.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572451736_album_normal.jpg" class="d-block w-100" alt="img2"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p>Fotografia/Producto</p>
                            <h2 class="text-warning bg-dark">PROYECTO 2</h2>
                            <p class="h4 text-warning bg-dark">Explicacion Proyecto 2</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" class="d-block w-100" alt="Img3"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p>Fotografia/Producto</p>
                            <h2 class="text-danger bg-dark">PROYECTO 3</h2>
                            <p class="h4 text-danger bg-dark">Explicacion Proyecto 3</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <div className="Separacion">
            <spam>PRODUCTORA AUDIOVISUAL</spam>
            <spam>PRODUCTORA AUDIOVISUAL</spam>
            <spam>PRODUCTORA AUDIOVISUAL</spam>
        </div>

        <div  className="seccion">
            <video className="drom"></video>
            <p>video del drom</p>
        </div>

        <div  className="seccion">
            <h1>¿POR QUÉ UN VIDEO?</h1>
            <table>
                <tr>
                    <th>80%</th>
                    <th>90%</th>
                    <th>64%</th>
                    <th>100%</th>
                </tr>
                <tr>
                    <td>de tráfico por internet será representado por videos en el año 2022.</td>
                    <td>de los consumidores son influenciados en sus decisiones por un video. </td>
                    <td>de los consumidoresd prefieren comprar después de ver un video. </td>
                    <td>es lo que aumenta según Youtube, el Mobile Video cada año.</td>
                </tr>
                <tr>
                    <td>FUENTES: Forbes</td>
                    <td>FUENTES: Forbes</td>
                    <td>FUENTES: Forbes</td>
                    <td>FUENTES: Forbes</td>
                </tr>
            </table>
        </div>
        
        </div>

    )
}

export default Portfolio