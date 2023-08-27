import styles from "./ContainerCardFormFilter.module.css";
const ContainerCardFormFilter = ({
  userImageUrl,
  employeeName,
  roleImageUrl,
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.imageIcon} alt="" src={userImageUrl} />
      <div className={styles.details}>
        <div className={styles.name}>
          <div className={styles.rekhaSekarManagerContainer}>
            <span className={styles.rekhaSekarManagerContainer1}>
              <p className={styles.rekhaSekar}>{employeeName}</p>
              <p className={styles.manager}>{roleImageUrl}</p>
            </span>
          </div>
        </div>
        <div className={styles.icon}>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
          <div className={styles.div3}></div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
