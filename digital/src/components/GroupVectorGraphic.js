import "./GroupVectorGraphic.css";

const GroupVectorGraphic = ({ group57, appDevelopment }) => {
  return (
    <div className="group-vector-graphic">
      <img
        className="group-vector-graphic-child"
        loading="lazy"
        alt=""
        src={group57}
      />
      <div className="frame-app-development">
        <div className="app-development">{appDevelopment}</div>
        <div className="ipsum-dolor-sit">
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus
        </div>
      </div>
    </div>
  );
};

export default GroupVectorGraphic;
