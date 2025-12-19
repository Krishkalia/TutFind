import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import Switch from "react-switch";

import { db } from "../../firebase";

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Listen to real-time user data
    useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, "Users"),where("userType","==",3)),
            (snapshot) => {
                const userData = snapshot.docs.map((d) => ({
                    id: d.id,
                    ...d.data(),
                }));
                setUsers(userData);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching users:", error);
                toast.error("Failed to load users");
                setLoading(false);
            }
        );
        return () => unsub();
    }, []);

    // Toggle user status
    const toggleStatus = async (id, currentStatus) => {
        try {
            await updateDoc(doc(db, "Users", id), { status: !currentStatus });
            toast.success("User status updated");
        } catch (err) {
            console.error(err);
            toast.error("Failed to update status");
        }
    };

    // Delete a user
 
    return (
        <>
            {loading ? (
                <ClockLoader
                    color="#1c5d0b"
                    cssOverride={{ marginLeft: "50%", marginTop: "25%", marginBottom: "15%" }}
                />
            ) : (
                <main className="main">
                    <div className="page-title">
                        <div className="heading p-5">
                            <div className="container">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-lg-8">
                                        <h1>Manage Users</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section">
                        <div className="container">
                            <div className="card shadow border-2 p-4">
                                <table className="table table-hover text-center align-middle">
                                    <thead className="">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Class</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length > 0 ? (
                                            users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <img
                                                            src={user.image}
                                                            alt={user.name}
                                                            style={{
                                                                width: "50px",
                                                                height: "50px",
                                                                borderRadius: "50%",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.class}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.contact}</td>
                                                    {/* <td>
                                                        <button
                                                            className={`btn btn-sm ${user.status ? "btn-success" : "btn-danger"}`}
                                                            onClick={() => toggleStatus(user.id, user.status)}
                                                        >
                                                            {user.status ? "Active" : "Inactive"}
                                                        </button>
                                                    </td> */}

                                                    <td>
                                                        <Switch
                                                            className="react-switch"
                                                            onChange={()=>{
                                                                toggleStatus(user.id, user.status)
                                                            }}
                                                            checked={user.status}
                                                            aria-label="super secret label that is not visible"
                                                        />
                                                    </td>
                                                   
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7">No users found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>
            )}
            <ToastContainer />

        </>
    );
}

export default ManageUsers;
