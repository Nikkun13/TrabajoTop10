import './PortfolioPage.css'
import { useParams } from 'react-router-dom'
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail";

const PortfolioPage = () => {

    const { TrabajoId } = useParams()

    return (
        <div>
            <PortfolioDetail id={TrabajoId}/>
            <div>Footer Portfolio</div>
        </div>
    )
}

export default PortfolioPage;