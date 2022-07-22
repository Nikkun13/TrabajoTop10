import './ToTheTop.css'

const ToTheTop = () => {

    return(
        <div className='areaAlCielo'>
            <button onClick={() => window.scrollTo(0, 0)} className='botonAlCielo'>▲</button>
        </div>
    )
}

export default ToTheTop;