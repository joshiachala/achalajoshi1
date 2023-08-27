import { useMemo } from "react";
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
    <div className={styles.rectangleParent} style={frameDivStyle}>
      <img className={styles.componentChild} alt="" src="/rectangle-3@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.home}>{`About Us `}</div>
          </div>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.home}>Mentors</div>
          </div>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.home}>{`Sessions `}</div>
          </div>
        </div>
        <div className={styles.iconamoonprofileParent}>
          <img
            className={styles.iconamoonprofile}
            alt=""
            src="/iconamoonprofile.svg"
          />
          <div className={styles.home}>Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
