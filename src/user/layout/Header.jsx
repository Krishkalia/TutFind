import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GooeyNav from "../../navbar";

export default function Header() {
  const nav = useNavigate();
  const islogin = sessionStorage.getItem("isLogin") === "true";

  const items = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Tutors", href: "/viewTutors", protected: true },
    { label: "Bookings", href: "/viewBookingUser", protected: true },
    { label: "Review", href: "/review", protected: true },
    { label: "View Review", href: "/ViewReview", protected: false },
  ];

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ title: "Logout!", icon: "success" });
        sessionStorage.clear();
        nav("/login");
        window.location.reload();
      }
    });
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">TutFind</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <div
            className="tutfind-gooey-wrapper"
            style={{ height: 80, position: "relative", overflow: "visible" }}
          >
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={400}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>

        {islogin ? (
          <button onClick={logout} className="btn-getstarted btn">Logout</button>
        ) : (
          <Link to="/login" className="btn-getstarted">Login</Link>
        )}
      </div>
    </header>
  );
}
