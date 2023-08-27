import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  homeColor,
  mentorsColor,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const mentorsStyle = useMemo(() => {
    return {
      color: mentorsColor,
    };
  }, [mentorsColor]);

  return (
    <div className={styles.rectangleParent} style={frameDiv1Style}>
      <img className={styles.componentChild} alt="" src="/rectangle-3@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.homeWrapper}>
            <div className={styles.home} style={homeStyle}>
              Home
            </div>
          </div>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.home}>{`About Us `}</div>
          </div>
          <div className={styles.aboutUsWrapper}>
            <div className={styles.home} style={mentorsStyle}>
              Mentors
            </div>
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

export default FrameComponent1;
