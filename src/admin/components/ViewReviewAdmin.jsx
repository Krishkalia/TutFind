import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ClockLoader, ScaleLoader } from "react-spinners";

function ViewReviewsAdmin() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = 
            collection(db, "Reviews")
        

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedReviews = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setReviews(fetchedReviews);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <main className="main">
            <div className="page-title">
                <div className="heading">
                    <div className="container text-center">
                        <h1>Reviews</h1>
                        <p className="mb-0">All submitted reviews</p>
                    </div>
                </div>
            </div>

            {loading ? (
                <ClockLoader color="#1c5c0ad0" cssOverride={{ margin: "15% 50%" }} />
            ) : reviews.length === 0 ? (
                <div className="container text-center mt-5">
                    <h4>No reviews found</h4>
                </div>
            ) : (
                <div className="container mt-4">
                    <table className="table table-striped  table-hover text-center align-middle">
                        <thead className="">
                            <tr>
                                <th>#</th>
                                <th>Subject</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review, index) => (
                                <tr key={review.id}>
                                    <td>{index + 1}</td>
                                    <td>{review.subject}</td>
                                    <td>{review.name}</td>
                                    <td>{review.email}</td>
                                    <td>{review.message}</td>
                                    <td>{review.createdAt?.toDate().toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}

export default ViewReviewsAdmin;
