import { useMemo } from "react";
import styles from "./ContainerButton.module.css";
const ContainerButton = ({
  dimensions,
  propWidth,
  propBackgroundColor,
  propBorder,
  propColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const button1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const learnMoreStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <div className={styles.button1} style={button1Style}>
        <div className={styles.getFreeEstimate}>
          <div className={styles.learnMore} style={learnMoreStyle}>
            Learn More
          </div>
          <img className={styles.vectorIcon} alt="" src={dimensions} />
        </div>
      </div>
    </div>
  );
};

export default ContainerButton;
