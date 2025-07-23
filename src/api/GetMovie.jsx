
export const GetMovie= async ({params}) => {
    const{movieID}=params;
        console.log(movieID);
        const id=params.movieID;
    try{
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=1c12799f`
  );
  const data = await response.json();
  return data;
 } catch(error){
    console.log(error);
 }
};
