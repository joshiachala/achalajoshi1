import ContainerCardFormFilter from "./ContainerCardFormFilter";
import ContainerForm from "./ContainerForm";
import styles from "./ContainerCard.module.css";
const ContainerCard = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div1}>
        <img className={styles.imageIcon} alt="" src="/photo1.jpg" />
        <div className={styles.details}>
          <div className={styles.name}>
            <div className={styles.shaliniSoftwareDeveloperContainer}>
              <span className={styles.shaliniSoftwareDeveloperContainer1}>
                <p className={styles.shalini}>
                  <span>
                    <span>Shalini</span>
                    <span className={styles.span}>{` `}</span>
                  </span>
                </p>
                <p className={styles.softwareDeveloper}>Software Developer</p>
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
        userImageUrl="/photo2.jpg"
        employeeName="Rekha Sekar"
        roleImageUrl="Manager"
      />
      <ContainerForm
        imageDimensions="/photo3.png"
        personRole="Deepak"
        jobTitle="UX Designer"
      />
      <ContainerForm
        imageDimensions="/photo4.jpg"
        personRole="Naveen"
        jobTitle="Architect"
      />
    </div>
  );
};

export default ContainerCard;
