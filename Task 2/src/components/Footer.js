import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            {`Finsweet`}
          </div>
          <p className="footer-text">
            We are always open to discuss your project and improve your online presence.
          </p>
          <div className="footer-contact">
            <div className="contact-row">
              <div>
                <h3>Email me at</h3>
                <p><a href="mailto:contact@website.com">contact@website.com</a></p>
              </div>
              <div>
                <h3>Call us</h3>
                <p>0927 6277 28625</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Let's Talk!</h3>
          <p className="footer-text">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">Copyright 2022, Finsweet.com</p>
        <div className="footer-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About us</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">FAQ</a>
          <a href="#" className="nav-link">Blog</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
