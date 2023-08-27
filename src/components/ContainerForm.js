import styles from "./ContainerForm.module.css";
const ContainerForm = ({ imageDimensions, personRole, jobTitle }) => {
  return (
    <div className={styles.div}>
      <img className={styles.imageIcon} alt="" src={imageDimensions} />
      <div className={styles.details}>
        <div className={styles.name}>
          <div className={styles.deepakUxDesignerContainer}>
            <span className={styles.deepakUxDesignerContainer1}>
              <p className={styles.deepak}>{personRole}</p>
              <p className={styles.uxDesigner}>{jobTitle}</p>
            </span>
          </div>
        </div>
        <div className={styles.icon}>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
