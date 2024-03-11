import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg" />
      <div className="help-menu-text1">
        <b className="help-menu1">Digital agency</b>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
          volutpat ullamcorper amet adipiscing fermentum.
        </div>
        <div className="info-area">
          <div className="empty-frame">
            <img className="icon" loading="lazy" alt="" src="/1.svg" />
          </div>
          <img
            className="divider-line-icon"
            loading="lazy"
            alt=""
            src="/2.svg"
          />
          <img
            className="main-content-icon"
            loading="lazy"
            alt=""
            src="/3.svg"
          />
        </div>
      </div>
      <div className="help-menu-double-frame">
        <b className="help-menu2">Company</b>
        <div className="about-features-works-container">
          <p className="about1">{`About          `}</p>
          <p className="features">{`Features          `}</p>
          <p className="works">{`Works          `}</p>
          <p className="career">{`Career  `}</p>
        </div>
      </div>
      <div className="help-menu-double-frame1">
        <b className="help-menu3">Help</b>
        <div className="about-features-works-container1">
          <p className="customer-support">Customer Support</p>
          <p className="delivery-details">Delivery Details</p>
          <p className="terms-conditions">{`Terms & Conditions`}</p>
          <p className="privacy-policy">Privacy Policy</p>
        </div>
      </div>
      <div className="help-menu-title">
        <b className="help-menu4">Resources</b>
        <div className="about-features-works-container2">
          <p className="free-ebooksl">Free eBooksl</p>
          <p className="how-to-">How to - Blog</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
