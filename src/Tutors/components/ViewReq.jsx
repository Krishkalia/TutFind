import { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ClockLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ViewReq() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null); // Store room name for meeting
    const nav=useNavigate()

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(db, "Bookings"),
                where("TrainerId", "==", sessionStorage.getItem("id"))
            );
            // const snapshot = await getDocs(q);
            onSnapshot(q,(snapshot)=>{
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookings(data);
            })

           

        } catch (err) {
            console.error(err);
            toast.error("Failed to load bookings");
        } finally {
            setLoading(false);
        }
    };

    const Review=async(BookingId,TrainerId)=>{
        await updateDoc(doc(db, "Bookings", BookingId), {
            AppStatus: "Review",
            
        })
    }

    const startMeeting = async(booking,appStatus) => {
        setLoading(true)
        if(appStatus=="Pending"){
            const roomName = `CourseMeeting_${booking}`;
            setSelectedRoom(roomName);
            console.log(booking);
            
            await updateDoc(doc(db, "Bookings", booking), {
                AppStatus: "Join",
                MeetingName: roomName
            })
            setLoading(false)
            to
        }
        else{
            nav(`/tutor/jitsi/CourseMeeting_${booking}`  )
        
       }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <>
            {loading ? (
                <ClockLoader color="#1c5c0ad0" cssOverride={{ margin: "15% 50%" }} />
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
                                <p className="text-center text-muted">No bookings found.</p>
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
                                                <th>Ask For Review</th>
                                                <th>Requested On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((b, index) => (
                                                <tr key={b.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{b.email}</td>
                                                    <td>{b.course}</td>
                                                    <td>{new Date(b.startingDate).toLocaleString()}</td>
                                                    <td>{b.specialReq || "-"}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => startMeeting(b.id,b.AppStatus)}
                                                            className={b.AppStatus === "Pending" ? "btn text-white btn-warning" : "btn btn-success"}
                                                        >
                                                            {b.AppStatus}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                        onClick={()=>{
                                                                Review(b.id,b.TrainerId)
                                                        }}
                                                            className="btn btn-primary"
                                                        >
                                                            Requst for Review
                                                        </button>
                                                    </td>
                                                    <td>
                                                        {b.createdAt?.toDate
                                                            ? b.createdAt.toDate().toLocaleString()
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

export default ViewReq;
