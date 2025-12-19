import { Link } from "react-router-dom";
import TrueFocus from "../TrueFocus";
import LiquidEther from "./Bg";

function Home() {
  return (
    <main className="main">
      {/* Hero Section Starts */}
      <section id="hero" className="hero section dark-background text-center">
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Liquid background layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
            }}
          >
            <LiquidEther
              colors={["#2e04d6ff", "#ff8afbff", "#c1b9dfff"]}
              mouseForce={40}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={50}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Hero content layer */}
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{
              position: "relative",
              zIndex: 2,
              minHeight: "100vh",
            }}
          >
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="lead text-light"
            >
              Onestop need for tutor and learning
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="fw-bold text-light mt-3"
            >
              <TrueFocus
                sentence="Learning Today, Leading Tomorrow"
                manualMode={false}
                blurAmount={5}
                borderColor="blue"
                animationDuration={1}
                pauseBetweenAnimations={0.5}
              />
            </h2>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
              <Link to="/viewTutors" className="btn-get-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section Ends */}

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Find Expert Tutors for Your Learning Needs</h3>
              <p className="fst-italic">
                Connect with verified tutors in your specialization area and get
                personalized classes tailored to your goals.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>Flexible scheduling to fit your availability.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Learn from tutors with proven expertise in their specific
                    fields.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    One-on-one or group sessions with interactive learning
                    materials.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </main>
  );
}

export default Home;
