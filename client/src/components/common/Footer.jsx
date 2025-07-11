import React from "react";
//import "./Footer.css";

function Footer() {
  return (
    <footer className="section mt-5 " style={{backgroundColor:'grey'}}>
      <div className="container p-3">
        <div className="row">
          <div className="col-sm-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white ">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Feuchers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Resources
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Wikipedia </a>
                </li>
                <li>
                  <a href="">React blog</a>
                </li>
                <li>
                  <a href="">Term &amp; Service</a>
                </li>
                <li>
                  <a href="">Angular dev</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Sign Up </a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Contact Us
              </h6>
              <p className="contact-info mt-4">
                Contact us if need help withanything
              </p>
              <p className="contact-info">+91 9999999999</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">2024 © VNR, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;