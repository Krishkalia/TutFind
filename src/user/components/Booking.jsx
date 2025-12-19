import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";

function BookingPage() {
    const [startingDate, setStartingDate] = useState("");
    const [course, setCourse] = useState("");
    const [specialReq, setSpecialReq] = useState("");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const nav = useNavigate();

    const createBookingDoc = async (extraFields = {}) => {
        await addDoc(collection(db, "Bookings"), {
            startingDate,
            TrainerId: id,
            course,
            specialReq,
            userId: sessionStorage.getItem("id"),
            email: sessionStorage.getItem("email"),
            name: sessionStorage.getItem("name"),
            status: false,
            AppStatus: "Pending",
            createdAt: Timestamp.now(),
            ...extraFields,
        });

        toast.success("Booking submitted successfully!");
        setTimeout(() => {
            nav("/viewBookingUser");
        }, 1500);
        setStartingDate("");
        setCourse("");
        setSpecialReq("");
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        setLoading(true);

        const options = {
            key: "rzp_test_Q8bKRaQdmgftXW",
            amount: 500 * 100,
            currency: "INR",
            name: "Class Booking",
            description: "Test Transaction",
            handler: async function (response) {
                try {
                    await createBookingDoc({
                        PaymentId: response.razorpay_payment_id,
                        PaymentMode: "Online",
                    });
                } catch (err) {
                    console.error("Error adding booking: ", err);
                    toast.error("Failed to submit booking");
                } finally {
                    setLoading(false);
                }
            },
            prefill: {
                name: "Krish Kalia",
                email: "example@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Test Address",
            },
            theme: {
                color: "#4ef177ff",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoading(false);
    };

    const handleCashBooking = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createBookingDoc({
                PaymentId: null,
                PaymentMode: "Cash",
            });
        } catch (err) {
            console.error("Error adding booking: ", err);
            toast.error("Failed to submit booking");
        } finally {
            setLoading(false);
        }
    };

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
                                        <h1>Book a Course</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="breadcrumbs">
                            <div className="container">
                                <ol>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="current">Booking</li>
                                </ol>
                            </div>
                        </nav>
                    </div>

                    <section id="booking" className="contact section">
                        <div className="container mt-5" data-aos-delay={100}>
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-8">
                                    <div className="card shadow-lg border-0">
                                        <div className="card-body">
                                            <form onSubmit={handleBooking}>
                                                <div className="row gy-4 my-5 justify-content-center">
                                                    <div className="col-md-9">
                                                        <input
                                                            type="datetime-local"
                                                            className="form-control"
                                                            value={startingDate}
                                                            onChange={(e) => setStartingDate(e.target.value)}
                                                            min={new Date().toISOString().slice(0, 16)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="col-md-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Course Name"
                                                            value={course}
                                                            onChange={(e) => setCourse(e.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="col-md-9">
                                                        <textarea
                                                            className="form-control"
                                                            rows={4}
                                                            placeholder="Special Requirements"
                                                            value={specialReq}
                                                            onChange={(e) => setSpecialReq(e.target.value)}
                                                        ></textarea>
                                                    </div>

                                                    <div className="col-4">
                                                        <button className="btn btn-success w-100 my-2" type="submit">
                                                            Pay Online
                                                        </button>
                                                        <button
                                                            className="btn btn-success w-100"
                                                            type="button"
                                                            onClick={handleCashBooking}
                                                        >
                                                            Pay with cash
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )}
            <ToastContainer />
        </>
    );
}

export default BookingPage;
