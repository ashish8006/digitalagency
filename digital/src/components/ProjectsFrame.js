import FrameComponent from "./FrameComponent";
import "./ProjectsFrame.css";

const ProjectsFrame = () => {
  return (
    <section className="projects-frame">
      <div className="image-placeholder">
        <img
          className="rectangle-shape-icon"
          alt=""
          src="/rectangle-shape@2x.png"
        />
        <img
          className="unsplash6lct2krpvni-icon"
          loading="lazy"
          alt=""
          src="/unsplash6lct2krpvni@2x.png"
        />
      </div>
      <div className="blog-frame1">
        <h1 className="our-blogs">Our Blogs</h1>
        <div className="rectangle-info-wrapper">
          <div className="rectangle-info">
            <div className="blog-frame-title">
              <div className="text-block">
                <img
                  className="realtime-analytics-title"
                  loading="lazy"
                  alt=""
                  src="/rectangle-shape@2x.png"
                />
                <FrameComponent />
              </div>
              <div className="realtime-analytics-frame-parent">
                <div className="realtime-analytics-frame">
                  <img
                    className="realtime-analytics-frame-child"
                    alt=""
                    src="/rectangle-shape@2x.png"
                  />
                  <img
                    className="result-display-icon"
                    loading="lazy"
                    alt=""
                    src="/rectangle-6@2x.png"
                  />
                </div>
                <FrameComponent
                  propAlignSelf="unset"
                  propHeight="233px"
                  propMarginTop="-88px"
                  propMinWidth="unset"
                />
              </div>
            </div>
            <FrameComponent
              propAlignSelf="unset"
              propHeight="233px"
              propMarginTop="unset"
              propMinWidth="322px"
            />
          </div>
        </div>
      </div>
      <div className="button3">
        <div className="button-base4">
          <b className="label3">View all posts</b>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFrame;
