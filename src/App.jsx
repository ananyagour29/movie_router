import{createBrowserRouter,RouterProvider} from "react-router-dom";
import{Home} from"./pages/Home";
import{About} from"./pages/About";
import{Movie} from"./pages/Movie";
import{Error} from "./pages/Error";
import{AppLayout} from "./components/layout/AppLayout";
import{GetApi} from "./api/GetApi";
import{MovieDetails} from"./components/UI/MovieDetails"
import{GetMovie} from "./api/GetMovie";
import{Contact,contactData} from "./pages/Contact";
const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
          {
    index: true,
    element: <Home />
  },
        {
      path:"/Home",
      element:<Home/>
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/movie",
      element:<Movie/>,
      loader:GetApi,
     },
     {
      path:"/movie/:movieID",
      element:<MovieDetails/>,
      loader:GetMovie,
     },
     {
       path:"/contact",
       element:<Contact/>,
       action:contactData,
     }
      ]
    },
     
  ]);
  return(
    <>
 <RouterProvider router={router}/>
 {/* <h1>hello react</h1> */}
 </>
  )
}
export default App;
//jis page ko visit krna h /Home krna jruri hota h / krte h srf to bo fixed age h jo first hoga