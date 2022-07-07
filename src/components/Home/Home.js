import './Home.css'
import ReactPlayer from 'react-player'

const Home = () => {

    return (
        <div id="inicio" className="seccionNoTop">
            <ReactPlayer
            url={require('../../media/videos/videoBicicleta.mp4')}
            width='100%'
            height='100%' 
            playing
            loop
            controls
            volume='0'
            
            />
            {/* video de prueba, luego hay que colocar el video que va */}
        </div>
    )
}

export default Home