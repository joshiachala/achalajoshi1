import ContainerCardFormFilter from "./ContainerCardFormFilter";
import ContainerForm from "./ContainerForm";
import styles from "./ContainerCard1.module.css";
const ContainerCard1 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div1}>
        <img className={styles.imageIcon} alt="" src="/photo5.jpg" />
        <div className={styles.details}>
          <div className={styles.name}>
            <div className={styles.sofiaBusinessStrategistContainer}>
              <span className={styles.sofiaBusinessStrategistContainer1}>
                <p className={styles.sofia}>
                  <span>Sofia</span>
                  <span className={styles.span}> </span>
                </p>
                <p className={styles.businessStrategist}>Business Strategist</p>
              </span>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
          </div>
        </div>
      </div>
      <ContainerCardFormFilter
        userImageUrl="/photo6.jpg"
        employeeName="Madhumita"
        roleImageUrl="Content Writer"
      />
      <ContainerForm
        imageDimensions="/photo7.jpg"
        personRole="Nirmal"
        jobTitle="Electrical Engineer"
      />
      <ContainerForm
        imageDimensions="/photo8.jpg"
        personRole="Lokesh "
        jobTitle="Software Engineer"
      />
    </div>
  );
};

export default ContainerCard1;
