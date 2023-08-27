import styles from "./JoinUsCard.module.css";
const JoinUsCard = () => {
  return (
    <div className={styles.joinUs}>
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <div className={styles.content}>
        <div className={styles.subContent}>
          <div className={styles.joinOurCommunityContainer}>
            <p className={styles.joinOurCommunity}>{`Join Our Community `}</p>
            <p className={styles.joinOurCommunity}>of Mentors</p>
          </div>
          <div className={styles.becomingAMentor}>
            Becoming a mentor on Mentor Hub is quick and easy. Follow these
            simple steps to get started.
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.ourPortfolio}>
            <div className={styles.joinOurCommunityContainer}>Learn More</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
