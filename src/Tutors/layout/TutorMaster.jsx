import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../user/layout/Footer";
import Master from "../../user/layout/Master";
import TutorHeader from "./TutorHeader";
import { toast } from "react-toastify";

function TutorMaster() {
    const nav = useNavigate()
    if (sessionStorage.getItem("userType") != 2) {
        toast.warning("Please Login First")
        setTimeout(() => {
            nav("/login")

        }, 1500);
    }
    return ( 
        <>
        
        <TutorHeader/>
        <Outlet/>
        <Footer/>
        </>
     );
}

export default TutorMaster;