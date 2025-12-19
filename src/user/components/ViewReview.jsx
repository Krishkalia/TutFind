import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ClockLoader } from "react-spinners";

function ViewReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, "Reviews"),
            where("userId", "==", sessionStorage.getItem("id"))
        );

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
                        <p className="mb-0">Your submitted reviews</p>
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
                    <div className="row gy-4 justify-content-center">
                        {reviews.map((review, index) => (
                            <div 
                                key={review.id} 
                                className="col-lg-4 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="card text-center shadow border-0" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{review.subject}</h5>
                                        <h6 className="text-muted">{review.name} • {review.email}</h6>
                                        <p className="card-text mt-2">{review.message}</p>

                                        <p className="text-secondary small mt-3">
                                            {review.createdAt?.toDate().toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}

export default ViewReviews;
