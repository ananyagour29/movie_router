import"./Card.css"
import{useLoaderData} from "react-router-dom";
export const MovieDetails=()=>{
const data=useLoaderData();
console.log(data);
const {Actors,Year,Poster,Title,Released,Plot,BoxOffice}=data;
return(
    <li className="heroo">
  <div className="main">
    <div className="poster">
      <img src={Poster} alt={Title} />
    </div>
    <div className="ticket slide-in">
      <div className="content">
        <h4 className="title">{Title}</h4>
        <p>{Plot}</p>
        <p className="price">{BoxOffice}</p>
        <p className="price"> {Released}</p>
        <p className="price">{Actors}</p>
        <p className="price"> {Year}</p>
        <button className="buy-btn">Buy Ticket</button>
      </div>
    </div>
  </div>
</li>

)
}