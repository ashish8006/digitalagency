import "./RealtimeAnalytics.css";

const RealtimeAnalytics = () => {
  return (
    <section className="realtime-analytics">
      <div className="group-footer">
        <div className="button-base1">
          <div className="help-menu-about">
            <div className="text-lorem-intro">
              <h1 className="building-brands-in-container">
                <span>{`Building Brands in the `}</span>
                <span className="digital-age">Digital Age</span>
              </h1>
              <div className="your-partner-in">
                Your partner in navigating the ever-evolving landscape of
                digital marketing. From conceptualization to execution, we craft
                tailored solutions that drive results and elevate your brand to
                new heights.
              </div>
            </div>
            <div className="button1">
              <div className="button-base2">
                <b className="label1">Learn More</b>
              </div>
            </div>
          </div>
        </div>
        <div className="services-frame">
          <img className="image-6-icon" alt="" src="/image-6@2x.png" />
          <div className="about-frame">
            <div className="about-frame-child" />
            <div className="star-frame-wrapper">
              <div className="star-frame">
                <img
                  className="star-icon"
                  loading="lazy"
                  alt=""
                  src="/star.svg"
                />
                <b className="projects1">Projects</b>
              </div>
            </div>
            <div className="done-frame">
              <div className="done">
                <b>600+</b>
                <span className="span">{` `}</span>
                <span>Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtimeAnalytics;
