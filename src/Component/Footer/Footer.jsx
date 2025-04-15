import React from "react";
import "./style.css";
import logo from '../../assets/images/Logo.png';
import FooterTop from "./FooterTop/FooterTop";


const Footer = () => {
    return (

        <>
            <FooterTop />
            <div className="container-fluid p-0 m-0 bg-dark">
                <div className="footer-content">
                    <div className="row text-white">
                        <div className="col-md-12 col-lg-6 text-md-start">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={logo} alt="Logo" className="footer-logo" />
                                </div>
                                <div className="col-md-8" style={{ padding: window.innerWidth < 768 ? '20px 0px' : '0' }}>
                                    <p className="text-border">Beyond the Deal Paris</p>
                                    <p className="icon-text">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#92DB79" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                                            </svg>
                                        </span>Westhafenplatz 160327, Frankfurt, Deutschland
                                    </p>

                                    <p className="icon-text">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#92DB79" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" />
                                            </svg>
                                        </span>+49 (0) 69 2475 7190
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-md-8" style={{ padding: window.innerWidth < 768 ? '20px 0px' : '0' }}>
                                    <p className="text-border">Beyond the Deal Paris</p>
                                    <p className="icon-text">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#92DB79" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                                            </svg>
                                        </span>Westhafenplatz 160327, Frankfurt, Deutschland
                                    </p>

                                    <p className="icon-text">
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#92DB79" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" />
                                            </svg>
                                        </span>+49 (0) 69 2475 7190
                                    </p>
                                </div>

                                {/* <div className="col-md-2"></div> */}
                                <div className="col-md-4 text-end">
                                    <p className="text-border">Social Media Icons</p>
                                    <div className="social-icons">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M20.462 3.23c.154 0 .308.078.384.155a.49.49 0 0 1 0 .461l-6.076 10.77l3.846 7.076a.49.49 0 0 1 0 .462a.6.6 0 0 1-.385.154h-2.77c-.384 0-.614-.308-.768-.539l-3.923-7.154C11 14.308 16.924 3.77 16.924 3.77c.153-.308.384-.538.769-.538zM8.923 7c.385 0 .616.308.77.538l1.923 3.308c-.154.154-3 5.23-3 5.23c-.154.232-.385.54-.77.54H5.155a.6.6 0 0 1-.384-.154a.49.49 0 0 1 0-.462l2.846-5.154l-1.846-3.23a.49.49 0 0 1 0-.462A.6.6 0 0 1 6.154 7z" />
                                            </svg>
                                        </span>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                                                    <path strokeDasharray="24" strokeDashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
                                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" />
                                                    </path><path strokeDasharray="8" strokeDashoffset="8" d="M8 12h7">
                                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0" />
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <g fill="none" fillRule="evenodd">
                                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                    <path fill="currentColor" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M100.3 448H7V148.9h93.3V448zM53.5 108.1c-29.5 0-53.5-24-53.5-53.5S24 1 53.5 1s53.5 24 53.5 53.5-24 53.5-53.5 53.5zM447.9 448h-92.4V302.4c0-34.7-12.4-58.3-43.3-58.3-23.6 0-37.7 15.8-44 31.2-2.2 5.4-2.8 12.9-2.8 20.5V448h-92.3V148.9h92.3v40.8c12.2-18.8 34.1-45.6 83-45.6 60.5 0 105.9 39.4 105.9 124.2V448z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row text-white pb-5">
                        <div className="col-md-12 col-lg-6">
                            <p className="text-border" style={{ padding: window.innerWidth < 768 ? '20px 0px 0px 0px' : '0' }}>© Copyright 2025 | Beyond the Deal (BTD) GmbH</p></div>
                        <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                            <div className="footer-links">
                                <a href="#">Impressum</a>
                                <span className="divider">|</span>
                                <a href="#">Datenschutzerklärung</a>
                                <span className="divider">|</span>
                                <a href="#">Barrierefreiheit</a>
                                <span className="divider">|</span>
                                <a href="#">Einstellungen</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Footer;
