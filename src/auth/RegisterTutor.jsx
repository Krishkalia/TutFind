import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";

function RegisterTutor() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  // Upload image to Cloudinary
  const uploadImage = async (file) => {
    if (!file) {
      toast.error("Please select an image");
      return null;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images"); // Replace with your preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dqhhessok/image/upload`, // Replace with your Cloudinary cloud name
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      toast.error("Error uploading image");
      return null;
    }
  };

  // Email/password registration
  const handleForm = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const userCreds = await createUserWithEmailAndPassword(auth, email, password);
      const id = userCreds.user.uid;

      const imageUrl = await uploadImage(image);

      await setDoc(doc(db, "Users", id), {
        name,
        experience,
        contact,
        email,
        specialization,
        image: imageUrl || "",
        status: true,
        userType: 2,
        createdAt: new Date(),
      });

      sessionStorage.setItem("email", email);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("userType", 2);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("isLogin", "true");

      toast.success("Tutor Registered Successfully");
      setTimeout(() => {
        nav("/tutor");
      }, 1200);

      // Reset form
      setName("");
      setExperience("");
      setContact("");
      setEmail("");
      setPassword("");
      setSpecialization("");
      setImage(null);
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Registration Failed");
    } finally {
      setLoad(false);
    }
  };

  // Google sign-up / sign-in for tutors
  const handleGoogleRegister = async () => {
    setLoad(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const id = user.uid;
      const displayName = user.displayName || name || "Tutor";
      const userEmail = user.email || email;
      const photoURL = user.photoURL || null;

      // If provider didn't supply photo and user selected a file, upload it
      let finalImageUrl = photoURL;
      if (!finalImageUrl && image) {
        const uploaded = await uploadImage(image);
        if (uploaded) finalImageUrl = uploaded;
      }

      // Save or merge tutor document in Firestore
      await setDoc(
        doc(db, "Users", id),
        {
          name: displayName,
          experience: experience || "",
          contact: contact || "",
          email: userEmail,
          specialization: specialization || "",
          image: finalImageUrl || "",
          status: true,
          userType: 2,
          createdAt: new Date(),
        },
        { merge: true }
      );

      // Set session keys
      sessionStorage.setItem("email", userEmail);
      sessionStorage.setItem("name", displayName);
      sessionStorage.setItem("userType", 2);
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("isLogin", "true");

      toast.success("Signed in with Google successfully");
      setTimeout(() => {
        nav("/tutor");
      }, 1000);
    } catch (err) {
      console.error("Google sign-in error:", err);
      if (err?.code === "auth/popup-closed-by-user" || err?.code === "auth/cancelled-popup-request") {
        toast.info("Google sign-in cancelled");
      } else {
        toast.error(err?.message || "Google sign-in failed");
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      {load ? (
        <ClockLoader
          color="#1c5d0b"
          cssOverride={{ marginLeft: "50%", marginTop: "25%", marginBottom: "15%" }}
        />
      ) : (
        <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1>Tutor Register</h1>
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
                  <li className="current">Tutor Register</li>
                </ol>
              </div>
            </nav>
          </div>

          {/* Form Section */}
          <section className="contact section">
            <div className="container" data-aos-delay={100}>
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow border-2 p-4">
                    <h3 className="text-center mb-4">Tutor Registration</h3>

                    {/* Google register button */}
                    <div className="d-flex justify-content-center gap-2 mb-3">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleGoogleRegister}
                      >
                        Register with Google
                      </button>
                    </div>

                    <div className="text-center mb-3">
                      <small>Or register with email</small>
                    </div>

                    <form onSubmit={handleForm}>
                      <div className="row gy-4 justify-content-center">
                        <div className="col-md-8">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control shadow border-1"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-8">
                          <label>Experience</label>
                          <input
                            type="text"
                            className="form-control shadow border-1"
                            placeholder="e.g. 5 years"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-8">
                          <label>Contact</label>
                          <input
                            type="tel"
                            minLength={10}
                            maxLength={10}
                            className="form-control shadow border-1"
                            placeholder="Enter contact number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-8">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control shadow border-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-8">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control shadow border-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-8">
                          <label>Specialization</label>
                          <select
                            className="form-control shadow border-1"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            required
                          >
                            <option value="">Select Specialization</option>
                            <option value="Computer">Computer</option>
                            <option value="English">English</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="Maths">Maths</option>
                          </select>
                        </div>

                        <div className="col-md-8">
                          <label>Profile Image</label>
                          <input
                            type="file"
                            className="form-control shadow border-1"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                          />
                        </div>

                        <div className="col-md-12 d-flex justify-content-center">
                          <button type="submit" className="btn btn-success px-4 mt-2">
                            Register Tutor
                          </button>
                        </div>
                      </div>
                    </form>

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

export default RegisterTutor;
