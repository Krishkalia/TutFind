import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ClockLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function ViewTutors() {
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("isLogin") !== "true") {
            setLoading(false);
            toast.warning("Login First");
            setTimeout(() => {
                nav("/login");
            }, 1500);
        } else {
            onSnapshot(
                query(
                    collection(db, "Users"),
                    where("userType", "==", 2),
                    where("status", "==", true)
                ),
                (snapshot) => {
                    const tutorData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setTutors(tutorData);
                    setLoading(false);
                },
                (error) => {
                    console.error("Error fetching tutors:", error);
                    setLoading(false);
                }
            );
        }
    }, [nav]);

    if (loading) {
        return (
            <>
                <ClockLoader
                    color="#1c5d0b"
                    cssOverride={{
                        marginLeft: "50%",
                        marginTop: "25%",
                        marginBottom: "15%",
                    }}
                />
                <ToastContainer />
            </>
        );
    }

    return (
    <>
        <main className="main">
            <div className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1>Trainers</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li className="current">Trainers</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <section id="trainers" className="section trainers">
                <div className="container">
                    <div className="row gy-4">

                        {tutors.map((el) => (
                            <div className="col-lg-4 col-md-6" key={el.id} data-aos-delay={100}>
                                <div className="card shadow-lg border-0 h-100">
                                    
                                    <img 
                                        src={el.image}
                                        className="card-img-top"
                                        style={{ height: "260px", objectFit: "cover" }}
                                        alt=""
                                    />

                                    <div className="card-body text-center">
                                        <h4 className="card-title">{el.name}</h4>

                                        <p className="text-muted mb-1">
                                            {el.specialization || "Specialization not added"}
                                        </p>

                                        <p className="small">
                                            {el.experience || "Experience not added"}
                                        </p>

                                        <Link 
                                            to={`/Book/${el.id}`} 
                                            className="btn btn-success mt-2"
                                        >
                                            Book Tutor
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
        <ToastContainer />
    </>
);

}

export default ViewTutors;
