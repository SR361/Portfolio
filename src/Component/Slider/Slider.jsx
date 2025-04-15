import Laravel from "../../assets/images/icons/laravel.png"
import Icon2 from "../../assets/images/icons/icons-16.png"
import Icon3 from "../../assets/images/icons/icons-17.png"
import Banner1 from "../../assets/images/slider/banner-01.png"
const Slider = () => {
    return (
        <>
            <div id="home" className="rn-slider-area">
                <div className="slide slider-style-1">
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="content">
                                    <div className="inner">
                                        <span className="subtitle">Welcome to my world</span>
                                        <h1 className="title">Hi, I’m <span>Sanjay Ramdati</span><br />
                                            <span className="header-caption" id="page-top">
                                                <span className="cd-headline clip is-full-width">
                                                    <span>a </span>
                                                    <span className="cd-words-wrapper">
                                                        <b className="is-visible"> Developer.</b>
                                                        <b className="is-hidden">Professional Coder.</b>
                                                        <b className="is-hidden">Developer.</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </h1>
                                        <div>
                                            <p className="description">Hi, I&apos;m a Full Stack Developer with 3 years of hands-on experience, specializing in Laravel for backend development. I love building scalable, efficient web applications with clean, maintainable code. I’m comfortable working across the full stack—from crafting RESTful APIs to designing responsive UIs</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                            <div className="social-share-inner-left">
                                                <span className="title">find with me</span>
                                                <ul className="social-share d-flex liststyle">
                                                    <li className="instagram">
                                                        <a target="_blank" href="https://www.instagram.com/sanjay_ramdati_99">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                                        </a>
                                                    </li>
                                                    <li className="linkedin">
                                                        <a target="_blank" href="https://linkedin.com/in/sr-developer-46508b2aa">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="skill-share-inner">
                                                <span className="title">best skill on</span>
                                                <ul className="skill-share d-flex liststyle">
                                                    <li><img src={Laravel} alt="Icons Images" /></li>
                                                    <li><img src={Icon2} alt="Icons Images" /></li>
                                                    <li><img src={Icon3} alt="Icons Images" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 order-lg-2 col-lg-5">
                                <div className="thumbnail">
                                    <div className="inner">
                                        <img src={Banner1} alt="Personal Portfolio Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
