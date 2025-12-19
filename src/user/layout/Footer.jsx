import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <>
            <footer id="footer" className="footer position-relative light-background">
                <div className="container footer-top">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <Link href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">TuteFind</span>
                            </Link>
                            <div className="footer-contact pt-3">
                                <p>Jalandhar </p>
                                <p>Punjab, 144004</p>
                                <p className="mt-3">
                                    <strong>Phone:</strong> <span>+91 8360754129</span>
                                </p>
                                <p>
                                    <strong>Email:</strong> <span>krishkaliajal10@gmail.com</span>
                                </p>
                            </div>
                           
                        </div>
                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/viewTutors">Tutors</Link>
                                </li>
                                <li>
                                    <Link href="/review">Review</Link>
                                </li>
                               
                            </ul>
                        </div>
                      
                        <div className="col-lg-4 col-md-12 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>
                                Subscribe to our newsletter and receive the latest news about our
                                products and services!
                            </p>
                           
                        </div>
                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                    <p>
                        © <span>Copyright</span>{" "}
                        <strong className="px-1 sitename">TutFind</strong>{" "}
                        <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                     
                        Designed by <Link href="https://krishkalia.github.io/Portfolio/">Krish Kalia</Link>
                    </div>
                </div>
            </footer>
            {/* Scroll Top */}
            <Link
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </Link>
        </>
     );
}

export default Footer;