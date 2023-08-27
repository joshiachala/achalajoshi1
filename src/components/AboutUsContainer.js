import ContainerButton from "./ContainerButton";
import styles from "./AboutUsContainer.module.css";
const AboutUsContainer = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.content}>
        <div className={styles.subContent}>
          <div className={styles.atMentorHub}>At Mentor Hub</div>
          <div className={styles.weBelieveIn}>
            we believe in the power of mentorship. We provide a platform where
            passionate individuals like you can share your expertise and make a
            positive impact on others. Whether you're an experienced
            professional, an industry expert, or a seasoned entrepreneur, Mentor
            Hub offers you the opportunity to connect with mentees, guide them
            on their journey, and shape their future.
          </div>
        </div>
        <ContainerButton dimensions="/vector.svg" />
      </div>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
    </div>
  );
};

export default AboutUsContainer;
