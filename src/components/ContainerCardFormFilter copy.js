import styles from "./ContainerCardFormFilter.module.css";
const ContainerCardFormFilter = ({
  userImageUrl,
  personImageUrl,
  location1,
  mentorTestimonial,
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
      <div className={styles.content}>
        <div className={styles.person}>
          <img className={styles.imageIcon} alt="" src={userImageUrl} />
          <div className={styles.maliniSindhuChennaiContainer}>
            <p className={styles.maliniSindhu}>{personImageUrl}</p>
            <p className={styles.chennaiIndia}>{location1}</p>
          </div>
        </div>
        <div className={styles.beingAMentor}>{mentorTestimonial}</div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
