import "../../assets/css/feature.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import "../../assets/css/aos.css";

import portfolio1 from "../../assets/images/portfolio/worko.png"
import portfolio2 from "../../assets/images/portfolio/redbox.png"
import portfolio3 from "../../assets/images/portfolio/worko-partner.webp"
import portfolio4 from "../../assets/images/portfolio/earthsogood.png"
import portfolio5 from "../../assets/images/portfolio/modest.png"
import portfolio6 from "../../assets/images/portfolio/kids.png"
const Portfolio = () => {
    return (
        <>
            <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Visit my portfolio and keep your feedback</span>
                                <h2 className="title">My Portfolio</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.worko&hl=en_IN">
                                            <img src={portfolio1} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} target="_blank" href="https://play.google.com/store/apps/details?id=com.worko&hl=en_IN">Application</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a style={{ textDecoration: "none" }} target="_blank" href="https://play.google.com/store/apps/details?id=com.worko&hl=en_IN">Worko User Application</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.workopartner&hl=en_IN">
                                            <img src={portfolio3} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} target="_blank" href="https://play.google.com/store/apps/details?id=com.workopartner&hl=en_IN">Application</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a style={{ textDecoration: "none" }} target="_blank" href="https://play.google.com/store/apps/details?id=com.workopartner&hl=en_IN">Worko Partner Application</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a target="_blank" href="https://app.redboxglobal.com/">
                                            <img src={portfolio2} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} target="_blank" href="https://app.redboxglobal.com/">Application</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a style={{ textDecoration: "none" }} target="_blank" href="https://app.redboxglobal.com/">Redbox Globle App</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a href="javascript:void(0)">
                                            <img src={portfolio4} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} href="javascript:void(0)">Website</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a style={{ textDecoration: "none" }} href="javascript:void(0)">Earth So Good</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a target="_blank" href="https://www.modesto.sk/">
                                            <img src={portfolio5} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} target="_blank" href="https://www.modesto.sk/">Website</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a target="_blank" href="https://www.modesto.sk/" style={{ textDecoration: "none" }}>Modesto: Redefining E-commerce Excellence</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <a target="_blank" href="https://www.kidspreneurship.com/">
                                            <img src={portfolio6} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                <a style={{ textDecoration: "none" }} target="_blank" href="https://www.kidspreneurship.com/">Website</a>
                                            </div>
                                        </div>
                                        <h4 className="title"><a style={{ textDecoration: "none" }} target="_blank" href="https://www.kidspreneurship.com/">Kidspreneurship: Empowering Future Innovators</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;