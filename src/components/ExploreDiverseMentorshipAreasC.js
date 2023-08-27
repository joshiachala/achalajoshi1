import styles from "./ExploreDiverseMentorshipAreasC.module.css";
const ExploreDiverseMentorshipAreasC = () => {
  return (
    <div className={styles.areas}>
      <div className={styles.exploreDiverseMentorshipAreParent}>
        <div className={styles.exploreDiverseMentorship}>
          Explore Diverse Mentorship Areas
        </div>
        <div className={styles.frameParent}>
          <div className={styles.businessAndEntrepreneurshipParent}>
            <b className={styles.businessAndEntrepreneurship}>
              Business and Entrepreneurship
            </b>
            <div className={styles.diveIntoThe}>
              Dive into the world of business and entrepreneurship. Our mentors
              in this area can provide valuable insights on topics like business
              strategy, marketing, finance, startups, leadership, and innovation
            </div>
            <div className={styles.button}>
              <div className={styles.readMore}>Read More</div>
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
            </div>
          </div>
          <div className={styles.businessAndEntrepreneurshipParent}>
            <b className={styles.artsAndCreativity}>Arts and Creativity</b>
            <div className={styles.diveIntoThe}>
              Unleash your creative potential with our mentors in the arts and
              creativity. Whether you're passionate about visual arts, writing,
              music, photography, or performing arts, our mentors can provide
              you with the necessary guidance and inspiration.
            </div>
            <div className={styles.button}>
              <div className={styles.readMore}>Read More</div>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            </div>
          </div>
          <div className={styles.technologyParent}>
            <b className={styles.technology}>Technology</b>
            <div className={styles.diveIntoThe}>
              Enhance your skills in the ever-evolving field of technology. Our
              technology mentors can guide you in areas such as software
              development, web design, data science, cybersecurity, artificial
              intelligence, and more
            </div>
            <div className={styles.button2}>
              <div className={styles.readMore}>Read More</div>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            </div>
          </div>
        </div>
        <div className={styles.button3}>
          <div className={styles.ourPortfolio}>
            <div className={styles.readMore}>Find Your Mentor</div>
            <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDiverseMentorshipAreasC;
