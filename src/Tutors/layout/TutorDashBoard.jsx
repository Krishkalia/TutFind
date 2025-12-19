import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer } from "react-toastify";

function TutorDashboard() {
    const [tutorCount, setTutorCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);

    useEffect(() => {
       

     
     

        // Bookings (total count)
        const unsubBookings = onSnapshot(
            query(collection(db, "Bookings"), where("TrainerId","==",sessionStorage.getItem("id"))),
            (snapshot) => {
                setBookingCount(snapshot.size);
            }
        );

        // Reviews (total count)
        const unsubReviews = onSnapshot(
            // collection(db, "Reviews"),
            query(collection(db, "Reviews"), where("TrainerId", "==", sessionStorage.getItem("id"))),

            (snapshot) => {
                setReviewCount(snapshot.size);
            }
        );

        return () => {
           
            unsubBookings();
            unsubReviews();
        };
    }, []);

    return (
        <>
            <div className="page-title">
                <div className="heading p-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="why-us" className="section why-us">
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-12 d-flex justify-content-center align-items-stretch">
                            <div className="row justify-content-center">


                                {/* Bookings */}
                                <div className="col-md-6">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-journal-check" />
                                        <h4>{bookingCount} Bookings</h4>
                                    </div>
                                </div>

                                {/* Reviews */}
                                <div className="col-md-6">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-chat-left-quote" />
                                        <h4>{reviewCount} Reviews</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default TutorDashboard;
