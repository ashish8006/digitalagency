import React from "react";
import FrameContainer from "../components/FrameContainer";
import RealtimeAnalytics from "../components/RealtimeAnalytics";
import FrameComponent1 from "../components/FrameComponent1";
import BlogPostFrame from "../components/BlogPostFrame";
import ProjectsFrame from "../components/ProjectsFrame";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-2">
      <FrameContainer />
      <RealtimeAnalytics />
      <div className="blog-frame">
        <div className="powering-next-gen-companies">
          Powering next-gen companies
        </div>
        <div className="first-blog-post">
          <div className="second-blog-post">
            <img
              className="second-blog-post-child"
              loading="lazy"
              alt=""
              src="/group-13.svg"
            />
          </div>
          <div className="second-blog-post1">
            <img
              className="second-blog-post-item"
              loading="lazy"
              alt=""
              src="/group-14.svg"
            />
          </div>
          <img
            className="first-blog-post-child"
            loading="lazy"
            alt=""
            src="/group-15.svg"
          />
          <div className="mask-group-wrapper">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
          <div className="divfixed">
            <img className="help-menu-footer" alt="" src="/vector-1.svg" />
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <BlogPostFrame />
      <ProjectsFrame />
      <Footer />
    </div>
  );
};



export default LandingPage;
