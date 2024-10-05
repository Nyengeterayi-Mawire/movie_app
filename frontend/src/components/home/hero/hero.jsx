import './hero.css';
const Hero = ({poster,overview,title}) => {
    return (
        <div className="hero-container">
            <img src={`https://image.tmdb.org/t/p/w400${poster}`}/>
            <div className="hero-description-container">
                <h2>{title}</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
export default Hero;