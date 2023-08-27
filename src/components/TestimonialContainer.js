import ContainerCardFormFilter from "./ContainerCardFormFilter";
import styles from "./TestimonialContainer.module.css";
const TestimonialContainer = () => {
  return (
    <div className={styles.testimonial}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.hearFromOur}>Hear from Our Mentors</div>
        </div>
        <div className={styles.testimonial1}>
          <ContainerCardFormFilter
            userImageUrl="/image2@2x.png"
            personImageUrl="Malini sindhu"
            location1="chennai , INDIA"
            mentorTestimonial={` "Being a mentor on Mentor Hub has been an incredibly rewarding experience. I've had the opportunity to share my knowledge and guide aspiring professionals in their career journeys.”`}
          />
          <ContainerCardFormFilter
            userImageUrl="/image3@2x.png"
            personImageUrl="Archana Nair"
            location1="kerala , INDIA"
            mentorTestimonial={`"Mentor Hub has exceeded my expectations. The platform's user-friendly design and comprehensive profile customization options have allowed me to showcase my expertise and build credibility with mentees”.`}
          />
          <div className={styles.div}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background1.svg"
            />
            <div className={styles.content1}>
              <div className={styles.person}>
                <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
                <div className={styles.deepakDineshChennaiContainer}>
                  <p className={styles.deepakDinesh}>Deepak Dinesh</p>
                  <p className={styles.chennaiIndia}>
                    <span>chennai</span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.india}>, INDIA</span>
                  </p>
                </div>
              </div>
              <div className={styles.asAMentor}>
                "As a mentor on Mentor Hub, I've been able to connect with
                mentees from around the world, bridging geographical boundaries.
                The platform's robust search functionality and categorization
                have made it easy for mentees to find me based on their specific
                needs.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;
