import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  propAlignSelf,
  propHeight,
  propMarginTop,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      marginTop: propMarginTop,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propHeight, propMarginTop, propMinWidth]);

  return (
    <div className="rectangle-parent" style={frameDivStyle}>
      <div className="frame-child" />
      <div className="realtime-analytics-parent">
        <h3 className="realtime-analytics1">Realtime analytics</h3>
        <div className="the-results-have1">{`“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. `}</div>
      </div>
      <img
        className="frame-item"
        loading="lazy"
        alt=""
        src="/group-2166@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
