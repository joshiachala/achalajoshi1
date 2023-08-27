import styles from "./SectionCard.module.css";
const SectionCard = () => {
  return (
    <div className={styles.desktop3Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-5@2x.png"
            />
            <div className={styles.icons}>
              <div className={styles.div}></div>
              <div className={styles.div}></div>
              <div className={styles.div}></div>
              <div className={styles.div3}></div>
            </div>
          </div>
          <div className={styles.pagesParent}>
            <b className={styles.pages}>Pages</b>
            <div className={styles.aboutUsMentorsContainer}>
              <p className={styles.aboutUs}>About Us</p>
              <p className={styles.aboutUs}>&nbsp;</p>
              <p className={styles.aboutUs}>Mentors</p>
              <p className={styles.p}></p>
              <p className={styles.aboutUs}>Sessions</p>
              <p className={styles.aboutUs}>&nbsp;</p>
              <p className={styles.aboutUs}>Sign up</p>
            </div>
          </div>
          <div className={styles.contact}>
            <b className={styles.contact1}>Contact</b>
            <div className={styles.mainStreetCityStateContainer}>
              <span className={styles.mainStreetCityStateContainer1}>
                <p className={styles.aboutUs}>
                  <span className={styles.mainStreetCityState}>
                    123 Main Street City, State 12345 contact@mentorhub.com
                  </span>
                  <span className={styles.span}></span>
                </p>
                <p className={styles.p1}>(123) 456 - 7890</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.mentorHubAll}>
          © 2023 Mentor Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
