function CourseDetails() {
    return (   
        <>
            <main className="main">
                {/* Page Title */}
                <div className="page-title" >
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>Course Details</h1>
                                    <p className="mb-0">
                                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                                        quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                                        dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                                        quaerat ipsum dolorem.
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
                                <li className="current">Course Details</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* End Page Title */}
                {/* Course Details Section */}
                <section id="course-details" className="course-details section">
                    <div className="container"  data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-8">
                                {/* Course Header */}
                                <div
                                    className="course-header"
                                    
                                    data-aos-delay={200}
                                >
                                    <div className="course-image">
                                        <img
                                            src="assets/img/course/course-details-1.webp"
                                            alt="Course Image"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="course-meta">
                                        <div className="instructor">
                                            <img
                                                src="assets/img/person/person-f-3.webp"
                                                alt="Instructor"
                                                className="instructor-avatar"
                                            />
                                            <div className="instructor-info">
                                                <h6>Dr. Sarah Mitchell</h6>
                                                <span>Computer Science Professor</span>
                                            </div>
                                        </div>
                                        <div className="course-stats">
                                            <div className="stat-item">
                                                <i className="bi bi-people" />
                                                <span>2,847 students</span>
                                            </div>
                                            <div className="stat-item">
                                                <i className="bi bi-clock" />
                                                <span>40 hours</span>
                                            </div>
                                            <div className="stat-item">
                                                <i className="bi bi-calendar" />
                                                <span>16 weeks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Course Header */}
                                {/* Course Content */}
                                <div
                                    className="course-content"
                                    
                                    data-aos-delay={300}
                                >
                                    <h2>Advanced Web Development Fundamentals</h2>
                                    <div className="course-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                    </div>
                                    <div className="what-you-learn">
                                        <h3>What You'll Learn</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="learn-list">
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Modern JavaScript fundamentals and ES6+ features
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        React.js component-based development
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Node.js backend development essentials
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Database design and MongoDB integration
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="learn-list">
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        RESTful API development and testing
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Authentication and security best practices
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Deployment strategies and DevOps basics
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-check-circle" />
                                                        Version control with Git and collaboration
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Course Content */}
                                {/* Course Curriculum */}
                                <div
                                    className="course-curriculum"
                                    
                                    data-aos-delay={400}
                                >
                                    <h3>Course Curriculum</h3>
                                    <div className="curriculum-section">
                                        <div className="section-header">
                                            <h4>Module 1: Introduction to Modern Web Development</h4>
                                            <span className="lessons-count">6 lessons • 3 hours</span>
                                        </div>
                                        <div className="lessons">
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>Setting up the Development Environment</span>
                                                </div>
                                                <span className="lesson-duration">18 min</span>
                                            </div>
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>JavaScript Fundamentals Review</span>
                                                </div>
                                                <span className="lesson-duration">25 min</span>
                                            </div>
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-file-text" />
                                                    <span>Understanding Modern Development Tools</span>
                                                </div>
                                                <span className="lesson-duration">32 min</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="curriculum-section">
                                        <div className="section-header">
                                            <h4>Module 2: React.js Fundamentals</h4>
                                            <span className="lessons-count">8 lessons • 5 hours</span>
                                        </div>
                                        <div className="lessons">
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>Component Architecture and JSX</span>
                                                </div>
                                                <span className="lesson-duration">28 min</span>
                                            </div>
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>State Management and Props</span>
                                                </div>
                                                <span className="lesson-duration">35 min</span>
                                            </div>
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-file-text" />
                                                    <span>Handling Events and Forms</span>
                                                </div>
                                                <span className="lesson-duration">42 min</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="curriculum-section">
                                        <div className="section-header">
                                            <h4>Module 3: Backend Development with Node.js</h4>
                                            <span className="lessons-count">10 lessons • 6 hours</span>
                                        </div>
                                        <div className="lessons">
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>Setting up Express.js Server</span>
                                                </div>
                                                <span className="lesson-duration">22 min</span>
                                            </div>
                                            <div className="lesson-item">
                                                <div className="lesson-info">
                                                    <i className="bi bi-play-circle" />
                                                    <span>Creating RESTful APIs</span>
                                                </div>
                                                <span className="lesson-duration">45 min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Course Curriculum */}
                            </div>
                            <div className="col-lg-4">
                                {/* Course Sidebar */}
                                <div
                                    className="course-sidebar"
                                    
                                    data-aos-delay={200}
                                >
                                    {/* Pricing Card */}
                                    <div className="pricing-card">
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="amount">199</span>
                                            <span className="period">/course</span>
                                        </div>
                                        <div className="original-price">$299</div>
                                        <div className="course-features">
                                            <div className="feature">
                                                <i className="bi bi-clock" />
                                                <span>40 hours of content</span>
                                            </div>
                                            <div className="feature">
                                                <i className="bi bi-trophy" />
                                                <span>Certificate of completion</span>
                                            </div>
                                            <div className="feature">
                                                <i className="bi bi-phone" />
                                                <span>Mobile and desktop access</span>
                                            </div>
                                            <div className="feature">
                                                <i className="bi bi-infinity" />
                                                <span>Lifetime access</span>
                                            </div>
                                        </div>
                                        <button className="btn-enroll">Enroll Now</button>
                                        <button className="btn-preview">Preview Course</button>
                                    </div>
                                    {/* End Pricing Card */}
                                    {/* Course Info */}
                                    <div className="course-info-card">
                                        <h4>Course Information</h4>
                                        <div className="info-item">
                                            <span className="label">Level:</span>
                                            <span className="value">Intermediate</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Students:</span>
                                            <span className="value">2,847 enrolled</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Language:</span>
                                            <span className="value">English</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Prerequisites:</span>
                                            <span className="value">Basic HTML &amp; CSS</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Last Updated:</span>
                                            <span className="value">November 2024</span>
                                        </div>
                                    </div>
                                    {/* End Course Info */}
                                    {/* Tags */}
                                    <div className="course-tags">
                                        <h4>Tags</h4>
                                        <div className="tags-list">
                                            <span className="tag">Web Development</span>
                                            <span className="tag">JavaScript</span>
                                            <span className="tag">React</span>
                                            <span className="tag">Node.js</span>
                                            <span className="tag">Full Stack</span>
                                            <span className="tag">Programming</span>
                                        </div>
                                    </div>
                                    {/* End Tags */}
                                </div>
                                {/* End Course Sidebar */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Course Details Section */}
                {/* Tabs Section */}
                <section id="tabs" className="tabs section">
                    <div className="container"  data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active show"
                                            data-bs-toggle="tab"
                                            href="#tab-1"
                                        >
                                            Modi sit est
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                            Unde praesentium sed
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                            Pariatur explicabo vel
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                            Nostrum qui quasi
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                                            Iusto ut expedita aut
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 mt-4 mt-lg-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Architecto ut aperiam autem id</h3>
                                                <p className="fst-italic">
                                                    Qui laudantium consequatur laborum sit qui ad sapiente dila
                                                    parde sonata raqer a videna mareta paulona marka
                                                </p>
                                                <p>
                                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque
                                                    harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic
                                                    ut molestiae aut qui. Est repellat minima eveniet eius et
                                                    quis magni nihil. Consequatur dolorem quaerat quos qui
                                                    similique accusamus nostrum rem vero
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img
                                                    src="assets/img/illustration/illustration-13.webp"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="fst-italic">
                                                    Qui laudantium consequatur laborum sit qui ad sapiente dila
                                                    parde sonata raqer a videna mareta paulona marka
                                                </p>
                                                <p>
                                                    Ea ipsum voluptatem consequatur quis est. Illum error ullam
                                                    omnis quia et reiciendis sunt sunt est. Non aliquid
                                                    repellendus itaque accusamus eius et velit ipsa voluptates.
                                                    Optio nesciunt eaque beatae accusamus lerode pakto madirna
                                                    desera vafle de nideran pal
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img
                                                    src="assets/img/illustration/illustration-11.webp"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="fst-italic">
                                                    Eos voluptatibus quo. Odio similique illum id quidem non
                                                    enim fuga. Qui natus non sunt dicta dolor et. In asperiores
                                                    velit quaerat perferendis aut
                                                </p>
                                                <p>
                                                    Iure officiis odit rerum. Harum sequi eum illum corrupti
                                                    culpa veritatis quisquam. Neque necessitatibus illo rerum
                                                    eum ut. Commodi ipsam minima molestiae sed laboriosam a iste
                                                    odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum
                                                    voluptatem optio quae
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img
                                                    src="assets/img/illustration/illustration-14.webp"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>
                                                    Fuga dolores inventore laboriosam ut est accusamus
                                                    laboriosam dolore
                                                </h3>
                                                <p className="fst-italic">
                                                    Totam aperiam accusamus. Repellat consequuntur iure voluptas
                                                    iure porro quis delectus
                                                </p>
                                                <p>
                                                    Eaque consequuntur consequuntur libero expedita in voluptas.
                                                    Nostrum ipsam necessitatibus aliquam fugiat debitis quis
                                                    velit. Eum ex maxime error in consequatur corporis atque.
                                                    Eligendi asperiores sed qui veritatis aperiam quia a laborum
                                                    inventore
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img
                                                    src="assets/img/illustration/illustration-12.webp"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>
                                                    Est eveniet ipsam sindera pad rone matrelat sando reda
                                                </h3>
                                                <p className="fst-italic">
                                                    Omnis blanditiis saepe eos autem qui sunt debitis porro
                                                    quia.
                                                </p>
                                                <p>
                                                    Exercitationem nostrum omnis. Ut reiciendis repudiandae
                                                    minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum
                                                    quia odit vero atque qui quibusdam amet. Occaecati sed est
                                                    sint aut vitae molestiae voluptate vel
                                                </p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img
                                                    src="assets/img/illustration/illustration-10.webp"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Tabs Section */}
            </main>
</>
     );
}

export default CourseDetails;