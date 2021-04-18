import React from 'react';
import "./Footer.css";
import facebook from "../../../images/Facebook.png";
import twitter from "../../../images/Twitter.png";
import youTube from "../../../images/YouTube.png";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="row footer-div">
                <div className="col-md-6 footer-services">
                    <h5>Our Services</h5>
                    <p>Engagement Photography</p>
                    <p>Pre-wedding Photography</p>
                    <p>Wedding Photography</p>
                </div>
                <div className="col-md-6 footer-address">
                    <h5>Our Address</h5>
                    <p>NY, Hilopsita Road, 20.</p>
                    <div className="social-icon-div">
                        <img className="social-icon-img" src={facebook} alt="" />
                        <img className="social-icon-img" src={twitter} alt="" />
                        <img className="social-icon-img" src={youTube} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;









// import React from 'react';
// import './Footer.css';
// import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//     // const noNamed = [
//     //     { name: "Emergency Dental Care", link: "/emergency" },
//     //     { name: "Check Up", link: "/checkup" },
//     //     { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
//     //     { name: "Tooth Extraction", link: "/tooth-extract" },
//     //     { name: "Check Up", link: "/checkup" },
//     // ]
//     const ourAddress = [
//         { name: "New York - 101010 Hudson", link: "//google.com/map" },
//         { name: "Yards", link: "//google.com/map" },

//     ]
//     // const oralHealth = [
//     //     { name: "Emergency Dental Care", link: "/emergency" },
//     //     { name: "Check Up", link: "/checkup" },
//     //     { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
//     //     { name: "Tooth Extraction", link: "/tooth-extract" },
//     //     { name: "Check Up", link: "/checkup" },
//     //     { name: "Check Up", link: "/checkup" },
//     //     { name: "Check Up", link: "/checkup" }
//     // ]
//     const services = [
//         { name: "Emergency Dental Care", link: "/emergency" },
//         { name: "Check Up", link: "/checkup" },
//         { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
//         { name: "Tooth Extraction", link: "/tooth-extract" },
//         { name: "Check Up", link: "/checkup" },
//         { name: "Check Up", link: "/checkup" },
//         { name: "Check Up", link: "/checkup" }
//     ]
//     return (
//         <footer className="footer-area clear-both">
//             <div className="container pt-5">
//                 <div className="row py-5">
//                     {/* <FooterCol key={1} menuTitle={"."} menuItems={noNamed} /> */}
//                     <FooterCol key={2} menuTitle="Services" menuItems={services} />
//                     {/* <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} /> */}
//                     <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
//                         <ul className="social-media list-inline">
//                             <li className="list-inline-item"><a href="//facebook.com"> </a></li>
//                             <li className="list-inline-item"><a href="//google.com"> </a></li>
//                             <li className="list-inline-item"><a href="//instagram.com"></a></li>
//                         </ul>
//                         <div className="mt-5">
//                             <h6>Call now</h6>
//                             <button className="btn btn-primary">+2025550295</button>
//                         </div>
//                     </FooterCol>
//                 </div>
//                 <div className="copyRight text-center">
//                     <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
//                 </div>
//             </div>
//         </footer>

//     );
// };

// export default Footer;