import FrameComponent1 from "../components/FrameComponent1";
import ContainerCard from "../components/ContainerCard";
import ContainerCard1 from "../components/ContainerCard1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop4.module.css";
const Desktop4 = () => {
  return (
    <div className={styles.desktop4}>
      <FrameComponent1
        frameDivPosition="absolute"
        frameDivTop="27px"
        frameDivLeft="57px"
        homeColor="#1e1e1e"
        mentorsColor="#00487c"
      />
      <div className={styles.team}>
        <ContainerCard />
        <ContainerCard1 />
      </div>
      <div className={styles.ourMentors}>Our Mentors</div>
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="1668px"
        frameDivLeft="0px"
      />
    </div>
  );
};

export default Desktop4;
