import GroupVectorGraphic from "./GroupVectorGraphic";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="shop-wrapper">
      <div className="shop">
        <div className="explore-services">
          <h1 className="explore-our-services">Explore Our Services</h1>
          <div className="we-are-self-service">
            We are self-service data analytics software that lets you create
            visually.
          </div>
        </div>
        <div className="app-dev-group">
          <GroupVectorGraphic
            group57="/group-57.svg"
            appDevelopment="App Development"
          />
          <GroupVectorGraphic
            group57="/group.svg"
            appDevelopment="Web Designing"
          />
          <GroupVectorGraphic
            group57="/24vector-graphic.svg"
            appDevelopment="Graphic Designing"
          />
          <GroupVectorGraphic
            group57="/group-1.svg"
            appDevelopment="Digital Marketing"
          />
        </div>
        <div className="blogs-section">
          <div className="button2">
            <div className="button-base3">
              <b className="label2">Learn More</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
