import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";

function UserDashboard() {
    const [tutorCount, setTutorCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Tutors (userType == 2)
        const tutorQuery = query(collection(db, "Users"), where("userType", "==", 2));
        const unsubTutors = onSnapshot(tutorQuery, (snapshot) => {
            setTutorCount(snapshot.size);
        });

        // Users (userType == 3)
        const userQuery = query(collection(db, "Users"), where("userType", "==", 3));
        const unsubUsers = onSnapshot(userQuery, (snapshot) => {
            setUserCount(snapshot.size);
        });
        // toast.success("category loaded")

        
            return () => {

                unsubTutors();
                unsubUsers();
            };
        
    }, []);
 

    return (
        // <div className="row">
        //     <div className="col-xl-4">
        //         <div className="icon-box d-flex flex-column justify-content-center align-items-center">
        //             <i className="bi bi-person-badge" />
        //             <h4>{tutorCount} Tutors</h4>
        //             <p>Total registered tutors in the system</p>
        //         </div>
        //     </div>

        //     <div className="col-xl-4">
        //         <div className="icon-box d-flex flex-column justify-content-center align-items-center">
        //             <i className="bi bi-people" />
        //             <h4>{userCount} Users</h4>
        //             <p>Total registered users in the system</p>
        //         </div>
        //     </div>


        // </div>
        <>
 <div className="page-title">
                <div className="heading p-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1> DashBoard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        <section id="why-us" className="section why-us">
           
            <div className="container">
                <div className="row gy-4 justify-content-center">

                    {/* End Why Box */}
                    <div className="col-lg-12  d-flex justify-content-center align-items-stretch">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-person-badge" />
                                    <h4>{tutorCount} Tutors</h4>
                                    
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-people" />
                                    <h4>{userCount} Users</h4>
                                </div>
                            </div>


                         </div>
                    </div>
                </div>
            </div>
        </section>

        <ToastContainer/>
        </>

    );
}

export default UserDashboard;
