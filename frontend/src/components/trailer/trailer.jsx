import YouTube from "react-youtube"
import './trailer.css';
const Trailer = ({display,displayFunction,id}) => {
    return (
        <div className={`trailer ${display?'show':'hide'}`}>             
            <div className="trailer-inner-container"> 
                <button className="exit" onClick={()=>displayFunction(false)}>x</button>
                <YouTube videoId={`${id}`}></YouTube>
            </div>
        </div>
    )
}
export default Trailer;