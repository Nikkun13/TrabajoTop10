import './PortfolioPage.css'
import { useParams, NavLink, Link } from 'react-router-dom'

const PortfolioPage = () => {

    let { id } = useParams();
    id = parseInt(id);


    return (
        <div>
            <div>Trabajo {id} </div>
            <div>Footer Portfolio {id}</div>
            <table>
                <tbody>
                    <tr>
                        <td className='anterior'>{(id > 1) ? <Link to={`/portfolio/${id-1}`}>Trabajo Anterior </Link> : <div></div>}</td>
                        <td className='central'><NavLink to="/#portfolio">Volver al Inicio</NavLink></td>
                        <td className='posterior'>{(id < 3) ? <Link to={`/portfolio/${id+1}`}>Trabajo Siguiente</Link> : <div></div>}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PortfolioPage;