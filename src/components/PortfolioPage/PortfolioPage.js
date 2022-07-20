import './PortfolioPage.css'
import { useParams } from 'react-router-dom'
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail";

const PortfolioPage = () => {

    const { id } = useParams()

    return (
        <div>
            {/* <PortfolioDetail id={id}/> */}
            <div>Footer Portfolio {id}</div>
        </div>
    )
}

export default PortfolioPage;