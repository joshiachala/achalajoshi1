import AboutUsContainer from "../components/AboutUsContainer";
import JoinUsCard from "../components/JoinUsCard";
import TestimonialContainer from "../components/TestimonialContainer";
import HomeContainer from "../components/HomeContainer";
import ExploreDiverseMentorshipAreasC from "../components/ExploreDiverseMentorshipAreasC";
import SectionCard from "../components/SectionCard";
import CategoryContainer from "../components/CategoryContainer";
import styles from "./Desktop3.module.css";
const Desktop3 = () => {
  return (
    <div className={styles.desktop3}>
      <AboutUsContainer />
      <JoinUsCard />
      <TestimonialContainer />
      <HomeContainer />
      <ExploreDiverseMentorshipAreasC />
      <SectionCard />
      <div className={styles.desktop3Child} />
      <div className={styles.desktop3Item} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/rectangle-8@2x.png" />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.fullName}>Full Name</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.emailAddress}>Email Address</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <div className={styles.groupChild2} />
          <div className={styles.phoneNumber}>Phone number</div>
          <div className={styles.dob}>Dob</div>
        </div>
        <div className={styles.uploadPhoto}>Upload Photo</div>
        <div className={styles.personalInformation}>Personal Information :</div>
        <div className={styles.areasOfExpertise}>Areas of Expertise :</div>
        <CategoryContainer
          productDimensions="Category "
          categorySubcategoryText="/vector7.svg"
        />
        <CategoryContainer
          productDimensions=" Sub category"
          categorySubcategoryText="/vector8.svg"
          propLeft="679px"
          propTop="1012.86px"
          propGap="238px"
        />
        <div className={styles.availability}>Availability :</div>
        <div className={styles.aboutExperience}>About Experience :</div>
        <CategoryContainer
          productDimensions="Available Days"
          categorySubcategoryText="/vector9.svg"
          propLeft="167px"
          propTop="1198px"
          propGap="220px"
        />
        <div className={styles.groupChild3} />
        <div className={styles.button}>
          <div className={styles.ourPortfolio}>
            <div className={styles.register}>Register</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
