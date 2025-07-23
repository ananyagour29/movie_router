 import "./Error.css"
 import{useNavigate} from "react-router-dom";
 import { useRouteError } from "react-router-dom";
 export const Error=()=>{
    const error=useRouteError();
    console.log(error);
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    if(error.status===404){
    return(
    <section className="error-section">
        <div className="error-txt">
<img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404 page" />
           <div className="txt-center">
            <h2>the page you were looking for could not found</h2>
           </div>
        </div>
        {/* <NavLink to="/Home" className="go-back-link">
         Go Back to home page
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>
        Go Back to previous page
        </button>
    </section>
    )
}
}