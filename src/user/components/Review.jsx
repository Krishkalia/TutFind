import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

function ReviewPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const {id}=useParams()

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if(id){
                await addDoc(collection(db, "Reviews"), {
                    name,
                    TrainerId: id,
                    email,
                    userId: sessionStorage.getItem("id"),
                    subject,
                    message,
                    createdAt: Timestamp.now(),
                });
            }
            else{
                await addDoc(collection(db, "Reviews"), {
                    name,                   
                    email,
                    userId: sessionStorage.getItem("id"),
                    subject,
                    message,
                    createdAt: Timestamp.now(),
                });
            }

            toast.success("Review submitted successfully!");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            console.error("Error adding review:", error);
            toast.error("Failed to submit review");
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
                    {/* Page Title */}
                    <div className="page-title">
                        <div className="heading">
                            <div className="container">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-lg-8">
                                        <h1>Leave a Review</h1>
                                        <p className="mb-0">
                                            Share your feedback and help us improve.
                                        </p>
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
                                    <li className="current">Review</li>
                                </ol>
                            </div>
                        </nav>
                    </div>

                    {/* Review Section */}
                    <section id="review" className="contact section">
                        <div className="container" data-aos-delay={100}>
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-8">
                                    <div className="card shadow-lg border-0">
                                        <div className="card-body">
                                            <form onSubmit={handleReviewSubmit}>
                                                <div className="row gy-4">
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Your Name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Your Email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Subject"
                                                            value={subject}
                                                            onChange={(e) => setSubject(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea
                                                            className="form-control"
                                                            rows={6}
                                                            placeholder="Your Review"
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-md-12 text-center">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success px-4"
                                                        >
                                                            Submit Review
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

export default ReviewPage;
