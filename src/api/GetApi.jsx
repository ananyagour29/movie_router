// loader function
export const GetApi= async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=1c12799f&s=titanic&page=1`
  );
  const data = await response.json();
  return data; // this must have a `.Search` array
};
