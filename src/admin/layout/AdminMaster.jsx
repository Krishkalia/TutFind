import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../../user/layout/Footer";
import { toast, ToastContainer } from "react-toastify";

function AdminMaster() {
    const nav=useNavigate()
    if (sessionStorage.getItem("userType")!=1){
        toast.error("Please Login First")
        setTimeout(() => {
            nav("/login")

        }, 1500);
    }
    return ( 
        <>
        <AdminHeader/>
        <Outlet/>
        <Footer/>
        {/* <ToastContainer/> */}
        </>
     );
}

export default AdminMaster;