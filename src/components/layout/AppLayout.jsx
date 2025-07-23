import {Footer} from "./Footer";
import {Header} from "./Header";
import{Loading} from "./Loading"
import{Outlet, useNavigation} from "react-router-dom";
export const AppLayout=()=>{
    const navigation=useNavigation();
    console.log(navigation);
    if(navigation.state==="loading") return <Loading/>
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>

        </>
    )
} 