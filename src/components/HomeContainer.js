import FrameComponent from "./FrameComponent";
import ContainerButton from "./ContainerButton";
import styles from "./HomeContainer.module.css";
const HomeContainer = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionChild} />
      <img className={styles.heroSectionItem} alt="" src="/rectangle-1.svg" />
      <img
        className={styles.heroSectionInner}
        alt=""
        src="/rectangle-2@2x.png"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="11px"
        frameDivLeft="60px"
      />
      <div className={styles.unlockYourPotentialAsAMenParent}>
        <div className={styles.unlockYourPotentialContainer}>
          <span className={styles.unlockYourPotentialContainer1}>
            <p className={styles.unlockYourPotentialAsAMen}>
              <span
                className={styles.unlockYourPotential}
              >{`"Unlock your potential as a `}</span>
              <span className={styles.mentor}>{`Mentor `}</span>
              <span>and empower</span>
            </p>
            <p className={styles.unlockYourPotentialAsAMen}>
              {" "}
              others to thrive."
            </p>
          </span>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.ourPortfolio}>
              <div className={styles.getStartedAs}>Get Started as a Mentor</div>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </div>
          </div>
          <ContainerButton
            dimensions="/vector3.svg"
            propWidth="225px"
            propBackgroundColor="#fff"
            propBorder="1px solid var(--color-lightseagreen)"
            propColor="#00487c"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
