import { useMemo } from "react";
import ContactContainer from "./ContactContainer";
import styles from "./FrameComponent.module.css";
const FrameComponent = ({ frameDivPosition, frameDivTop, frameDivLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <ContactContainer />
    </div>
  );
};

export default FrameComponent;
