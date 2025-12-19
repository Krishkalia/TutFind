import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Master() {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     );
}

export default Master;