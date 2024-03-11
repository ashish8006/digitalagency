import "./BlogPostFrame.css";

const BlogPostFrame = () => {
  return (
    <section className="blog-post-frame">
      <div className="single-blog-post">
        <h1 className="h1">“</h1>
        <div className="blog-tags">
          <div className="footer-help-menu">
            <img
              className="help-menu-features"
              loading="lazy"
              alt=""
              src="/rectangle-21@2x.png"
            />
            <div className="h-e-l-p-m-e-n-u-a-b-o-u-t-f-e">
              <div className="result-frame">
                <h3 className="the-results-have">
                  “The results have been incredible. With Power Digital, it
                  feels like they’re in our trench, supporting and understanding
                  us. They’re like a partner and mentor in helping us get where
                  we want to be.”
                </h3>
                <div className="david-calathan-container">
                  <span className="david-calathan-">{`David Calathan - `}</span>
                  <span className="director-of-design">
                    Director of Design Operations, New York
                  </span>
                </div>
              </div>
              <div className="group-parent">
                <img
                  className="group-parent-child"
                  loading="lazy"
                  alt=""
                  src="/group-2164.svg"
                />
                <img
                  className="group-parent-item"
                  loading="lazy"
                  alt=""
                  src="/group-2165@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostFrame;
