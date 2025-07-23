import "./Header.css"
import{NavLink} from "react-router-dom";
export const Header=()=>{
    return(
        <>
        <div className="section-navbar">
            <section className="top_txt">
                                    <div className="sign">
                        <NavLink to="/signin" >SIGN IN</NavLink>
                          <NavLink to="/signup" >SIGN UP</NavLink>
                    </div>
                <div className="head">
                    <div className="head_txt">
                        <p>Get Gour Membership, 30-day return or refund guarantee</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index">
                        <p>GourFlix</p>
                    </NavLink>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className="nav_item">
                            <NavLink to="/home">Home</NavLink>
                        </li>
                            <li className="nav_item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                            <li className="nav_item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                            <li className="nav_item">
                            <NavLink to="/movie">Movie</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}
// active page show krne k lie just css add krdo .ative