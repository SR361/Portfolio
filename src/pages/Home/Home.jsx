import "../../assets/css/feature.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import "../../assets/css/aos.css";

// import "../../assets/js/main.js";
// import "../../assets/js/vendor/aos.js";
// import "../../assets/js/vendor/bootstrap.js";
// import "../../assets/js/vendor/jquery-one-page-nav.js";
// import "../../assets/js/vendor/jquery.js";
// import "../../assets/js/vendor/particles.js";
// import "../../assets/js/vendor/text-type.js";
// import "../../assets/js/vendor/wow.js";

import Navbar from "../../Component/Navbar/Navbar";
import Slider from "../../Component/Slider/Slider";
import WhatIDo from "../../Component/WhatIDo/WhatIDo";
import Portfolio from "../../Component/Portfolio/Portfolio";
import Resume from "../../Component/Resume/Resume";
import Contact from "../../Component/Contact/Contact";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="main-page-wrapper">
                <Slider />
                <WhatIDo />
                <Portfolio />
                <Resume />
                <Contact />
            </main>
        </>
    );
};

export default Home;
