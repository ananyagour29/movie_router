import{useLoaderData} from "react-router-dom";
import{Card} from"../components/UI/Card";
import"./HACM.css";
export const Movie=()=>{
         const moviesData=useLoaderData();
         console.log(moviesData);
           if (!moviesData || !moviesData.Search) {
    return <p>No movies found or loading failed.</p>;
  }
    return(
        <>
        <ul className="grid">
             {moviesData.Search.map((currMovie) => {
        return (
          <Card key={currMovie.imdbID} currMovie={currMovie} />
        );
      })}
      </ul>
        </>
    )
}
// Yes, exactly! ✅ const moviesData = useLoaderData(); gets the data that you returned from the loader 
// function you defined in App.jsx.