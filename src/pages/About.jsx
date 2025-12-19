import React from 'react'

export default function About() {
  return (
    <>
      <main className="main">
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>
                    About Us
                    <br />
                  </h1>
                  <p className="mb-0">
                    TutFind is a student-centric web app that helps learners quickly discover verified tutors and micro-courses for skill-building. It simplifies the process of finding and booking the right tutor, making learning accessible, fast, and trustworthy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">
                  About TutFind
                  <br />
                </li>
              </ol>
            </div>
          </nav>
        </div>

        <section id="about-us" className="section about-us">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-1 order-lg-2" data-aos-delay={100}>
                <img src="assets/img/about/about-1.webp" className="img-fluid" alt="TutFind app screenshot" />
              </div>
              <div className="col-lg-6 order-2 order-lg-1 content" data-aos-delay={200}>
                <h3>TutFind — what it does and who I am</h3>
                <p className="fst-italic">
                  TutFind is built with the learner in mind: discover short courses, message tutors,
                  schedule sessions and leave ratings. I designed the app for performance and
                  accessibility so it works well on low-bandwidth connections.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> <span>My name: Krish Kalia</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> <span>Role: Full-stack developer & project owner</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> <span>Core features: Tutor listings, Reviews, In-app chat, Booking</span>
                  </li>
                </ul>
                <h5>Technologies used</h5>
                <ul>
                  <li>React</li>
                  <li>Firebase (Auth, Firestore, Storage)</li>
                  <li>HTML, CSS (Bootstrap), JavaScript</li>
                  <li>Optional: Node.js backend for payments and webhooks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="section counts light-background">
          <div className="container" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={1232} data-purecounter-duration={1} className="purecounter" />
                  <p>Students</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={64} data-purecounter-duration={1} className="purecounter" />
                  <p>Courses</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={42} data-purecounter-duration={1} className="purecounter" />
                  <p>Events</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start={0} data-purecounter-end={24} data-purecounter-duration={1} className="purecounter" />
                  <p>Trainers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section">
          <div className="container section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>
          <div className="container" data-aos-delay={100}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/person/person-m-9.webp" className="testimonial-img" alt="" />
                      <h3>Amit Sharma</h3>
                      <h4>Student</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                          TutFind helped me find a great programming tutor in my city within
                          minutes. Lessons are affordable and the tutor explained concepts clearly.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/person/person-f-5.webp" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                          The UX is simple and clear; booking a session was quick and the tutor
                          was professional.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
