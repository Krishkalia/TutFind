import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [load, setload] = useState(false);
  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setload(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (usercredds) => {
        const id = usercredds.user.uid;

        try {
          const userSnap = await getDoc(doc(db, "Users", id));
          const userData = userSnap.exists() ? userSnap.data() : null;

          if (userData?.status) {
            sessionStorage.setItem("email", userData.email);
            sessionStorage.setItem("name", userData.name);
            sessionStorage.setItem("userType", userData.userType);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("isLogin", "true");

            if (userData.userType == 1) nav("/admin");
            else if (userData.userType == 2) nav("/tutor");
            else nav("/");

            toast.success("Login successfully");
          } else if (userData && !userData.status) {
            toast.error("Your account has been blocked");
          } else {
            // No doc exists — create default student
            await setDoc(doc(db, "Users", id), {
              name: usercredds.user.displayName || "",
              email: usercredds.user.email || email,
              contact: "",
              image: usercredds.user.photoURL || "",
              status: true,
              userType: 3,
              createdAt: new Date(),
            });

            sessionStorage.setItem("email", usercredds.user.email || email);
            sessionStorage.setItem("name", usercredds.user.displayName || "");
            sessionStorage.setItem("userType", 3);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("isLogin", "true");

            nav("/");
            toast.success("Login successful");
          }
        } catch (err) {
          toast.error("Login failed");
        } finally {
          setload(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setload(false);
        toast.error("Login Unsuccessful");
      });
  };

  // ---------------- GOOGLE SIGN IN ----------------
  const handleGoogleSignIn = async () => {
    setload(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const id = user.uid;

      const userRef = doc(db, "Users", id);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();

        if (!data.status) {
          toast.error("Your account has been blocked");
          setload(false);
          return;
        }

        // Set session
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("userType", data.userType);
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("isLogin", "true");

        if (data.userType == 1) nav("/admin");
        else if (data.userType == 2) nav("/tutor");
        else nav("/");

        toast.success("Signed in with Google");
      } else {
        // Create a new doc (default student)
        const newUser = {
          name: user.displayName || "",
          email: user.email || "",
          contact: "",
          image: user.photoURL || "",
          status: true,
          userType: 3,
          createdAt: new Date(),
        };

        await setDoc(userRef, newUser);

        sessionStorage.setItem("email", newUser.email);
        sessionStorage.setItem("name", newUser.name);
        sessionStorage.setItem("userType", newUser.userType);
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("isLogin", "true");

        nav("/");
        toast.success("Signed in with Google");
      }
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        toast.info("Google sign-in cancelled");
      } else {
        toast.error("Google sign-in failed");
      }
    } finally {
      setload(false);
    }
  };

  return (
    <>
      {load ? (
        <ClockLoader color="#1c5c0ad0" loading={true} cssOverride={{ margin: "15% 50%" }} />
      ) : (
        <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1>Login</h1>
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
                  <li className="current">Login</li>
                </ol>
              </div>
            </nav>
          </div>

          {/* Login Section */}
          <section id="contact" className="contact section">
            <div className="container mt-5">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow-lg border-0">
                    <div className="card-body">
                      <form onSubmit={handleForm}>
                        <h2 className="text-center">Login</h2>

                        <div className="row gy-4 my-5 justify-content-center">
                          <div className="col-md-9">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-9">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setpassword(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-4">
                            <button className="btn btn-success w-100" type="submit">
                              Login
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <span>
                            User Register?
                            <Link to={"/register"}> Register</Link>
                          </span>
                          <span>
                            Tutor Register?
                            <Link to={"/TutorReg"}> Register</Link>
                          </span>
                        </div>

                        {/* GOOGLE BUTTON AT BOTTOM */}
                        <div className="text-center mt-3">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleGoogleSignIn}
                          >
                            Sign in with Google
                          </button>
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

export default Login;
