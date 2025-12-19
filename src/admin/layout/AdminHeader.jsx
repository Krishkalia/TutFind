import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

function AdminHeader() {
    
    useEffect(()=>{
        if (sessionStorage.getItem("userType") != 1){
            toast.warning("Login First")
        }
    },[])
        const nav=useNavigate()
        const islogin=sessionStorage.getItem("isLogin")
        const logout=()=>{
            Swal.fire({
                title: "Are you sure?",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logout!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Logout!",
                        // text: "Your file has been deleted.",
                        icon: "success"
                    });
                    sessionStorage.clear()
                    window.location.reload()
                    nav("/login")
                }
            });
           
        }
    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <Link href="index.html" className="logo d-flex align-items-center me-auto">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename">TutFind</h1>
                    </Link>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <Link to={"/admin"} className="active">
                                    Home
                                   
                                </Link>
                            </li>
                            <li>
                                <Link to={"/admin/manageUser"} className="">
                                    Manage User
                                   
                                </Link>
                            </li>
                            <li>
                                <Link to={"/admin/manageTutor"} className="">
                                    Manage Tutor
                                   
                                </Link>
                            </li>
                            <li>
                                <Link to={"/admin/viewReview"} className="">
                                    Reviews
                                   
                                </Link>
                            </li>
                           
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    {
                        islogin == "true" ?

                            <button onClick={logout} className="btn-getstarted btn" href="courses.html">
                                Logout
                            </button> :
                            <Link to={"/login"} className="btn-getstarted" href="courses.html">
                                Login
                            </Link>
                    }
                </div>
            </header>
            {/* <ToastContainer/> */}
        </>
    );
}

export default AdminHeader;