import"./Card.css"
import{NavLink} from "react-router-dom";
export const Card=({currMovie})=>{
    const {Poster,imdbID}=currMovie;
    return(
        <>
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID}/>

                </div>
                <div className="ticket-container">
                    <div className="ticket-content">
                        {/* <NavLink to={`/movie/${currMovie.imdbID}`}> */}
                        <NavLink to={`/movie/${currMovie.imdbID}`}>
                        {/* to give dynamic link for each card */}
                        <button className="ticket-btn">Watch Now
                        </button>
                        </NavLink>
                        {/* </NavLink> */}
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}