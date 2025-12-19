import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ClockLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function ViewBookingUser() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    const fetchBookings = async () => {
        try {
            const q = query(
                collection(db, "Bookings"),
                where("userId", "==", sessionStorage.getItem("id"))
            );

            // realtime listener
            onSnapshot(q, (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookings(data);
                setLoading(false);
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to load bookings");
            setLoading(false);
        }
    };

    useEffect(() => {
        // 🔒 same login guard as ViewTutors
        if (sessionStorage.getItem("isLogin") !== "true") {
            setLoading(false);
            toast.warning("Login First");
            setTimeout(() => {
                nav("/login");
            }, 1500);
        } else {
            fetchBookings();
        }
    }, [nav]);

    return (
        <>
            {loading ? (
                <ClockLoader
                    color="#1c5c0ad0"
                    cssOverride={{ margin: "15% 50%" }}
                />
            ) : (
                <main className="main">
                    <div className="page-title">
                        <div className="heading">
                            <div className="container">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-lg-8">
                                        <h1>My Bookings</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="breadcrumbs">
                            <div className="container">
                                <ol>
                                    <li><a href="/">Home</a></li>
                                    <li className="current">Bookings</li>
                                </ol>
                            </div>
                        </nav>
                    </div>

                    <section className="section">
                        <div className="container mt-4">
                            {bookings.length === 0 ? (
                                <p className="text-center text-muted">
                                    No bookings found.
                                </p>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Email</th>
                                                <th>Course</th>
                                                <th>Starting Date</th>
                                                <th>Special Requirements</th>
                                                <th>Status</th>
                                                <th>Requested On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((b, index) => (
                                                <tr key={b.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{b.email}</td>
                                                    <td>{b.course}</td>
                                                    <td>
                                                        {new Date(
                                                            b.startingDate
                                                        ).toLocaleString()}
                                                    </td>
                                                    <td>
                                                        {b.specialReq || "-"}
                                                    </td>
                                                    <td>
                                                        {b.AppStatus ===
                                                        "Pending" ? (
                                                            <p>{b.AppStatus}</p>
                                                        ) : b.AppStatus ===
                                                          "Join" ? (
                                                            <Link
                                                                to={
                                                                    "/jitsi/" +
                                                                    b.MeetingName
                                                                }
                                                                className="btn btn-success"
                                                            >
                                                                {b.AppStatus}
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                                to={
                                                                    "/review/" +
                                                                    b.TrainerId
                                                                }
                                                                className="btn btn-primary"
                                                            >
                                                                {b.AppStatus}
                                                            </Link>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {b.createdAt?.toDate
                                                            ? b.createdAt
                                                                  .toDate()
                                                                  .toLocaleString()
                                                            : "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            )}
            <ToastContainer />
        </>
    );
}

export default ViewBookingUser;
