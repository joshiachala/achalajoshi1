import styles from "./Desktop1.module.css";
import { Link } from 'react-router-dom';
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.aboutUs}>
        <div className={styles.content}>
          <div className={styles.subContent}>
            <div className={styles.atMentorHub}>At Mentor Hub</div>
            <div className={styles.weBelieveIn}>
              we believe in the power of mentorship. We provide a platform where
              passionate individuals like you can share your expertise and make
              a positive impact on others. Whether you're an experienced
              professional, an industry expert, or a seasoned entrepreneur,
              Mentor Hub offers you the opportunity to connect with mentees,
              guide them on their journey, and shape their future.
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.button1}>
              <div className={styles.getFreeEstimate}>
                <div className={styles.learnMore}>Learn More</div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      </div>
      <div className={styles.joinUs}>
        <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
        <div className={styles.content1}>
          <div className={styles.subContent1}>
            <div className={styles.learnMore}>
              <p className={styles.joinOurCommunity}>{`Join Our Community `}</p>
              <p className={styles.joinOurCommunity}>of Mentors</p>
            </div>
            <div className={styles.becomingAMentor}>
              Becoming a mentor on Mentor Hub is quick and easy. Follow these
              simple steps to get started.
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.ourPortfolio}>
              <div className={styles.learnMore}>Learn More</div>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <div className={styles.content2}>
          <div className={styles.heading}>
            <div className={styles.hearFromOur}>Hear from Our Mentors</div>
          </div>
          <div className={styles.testimonial1}>
            <div className={styles.div}>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src="/background1.svg"
              />
              <div className={styles.content3}>
                <div className={styles.person}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className={styles.maliniSindhuChennaiContainer}>
                    <p className={styles.joinOurCommunity}>Malini sindhu</p>
                    <p className={styles.chennaiIndia}>chennai , INDIA</p>
                  </div>
                </div>
                <div className={styles.beingAMentor}>
                  {" "}
                  "Being a mentor on Mentor Hub has been an incredibly rewarding
                  experience. I've had the opportunity to share my knowledge and
                  guide aspiring professionals in their career journeys.”
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src="/background1.svg"
              />
              <div className={styles.content3}>
                <div className={styles.person}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image3@2x.png"
                  />
                  <div className={styles.maliniSindhuChennaiContainer}>
                    <p className={styles.joinOurCommunity}>Archana Nair</p>
                    <p className={styles.chennaiIndia}>kerala , INDIA</p>
                  </div>
                </div>
                <div className={styles.beingAMentor}>
                  "Mentor Hub has exceeded my expectations. The platform's
                  user-friendly design and comprehensive profile customization
                  options have allowed me to showcase my expertise and build
                  credibility with mentees”.
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <img
                className={styles.backgroundIcon1}
                alt=""
                src="/background1.svg"
              />
              <div className={styles.content3}>
                <div className={styles.person}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image4@2x.png"
                  />
                  <div className={styles.maliniSindhuChennaiContainer}>
                    <p className={styles.joinOurCommunity}>Deepak Dinesh</p>
                    <p className={styles.chennaiIndia}>
                      <span>chennai</span>
                      <span className={styles.span}>{` `}</span>
                      <span className={styles.india}>, INDIA</span>
                    </p>
                  </div>
                </div>
                <div className={styles.beingAMentor}>
                  "As a mentor on Mentor Hub, I've been able to connect with
                  mentees from around the world, bridging geographical
                  boundaries. The platform's robust search functionality and
                  categorization have made it easy for mentees to find me based
                  on their specific needs.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionChild} />
        <img className={styles.heroSectionItem} alt="" src="/rectangle-1.svg" />
        <img
          className={styles.heroSectionInner}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3@2x.png" />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.homeWrapper}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.aboutUsWrapper}>
                <div className={styles.home}>{`About Us `}</div>
              </div>
              <div className={styles.aboutUsWrapper}>
                <div className={styles.home}>Mentors</div>
              </div>
              <div className={styles.aboutUsWrapper}>
                <div className={styles.home}>{`Sessions `}</div>
              </div>
            </div>
            <div className={styles.iconamoonprofileParent}>
              <img
                className={styles.iconamoonprofile}
                alt=""
                src="/iconamoonprofile.svg"
              />
               <Link to="/signup">
              <div className={styles.home}>Sign up</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.unlockYourPotentialAsAMenParent}>
          <div className={styles.unlockYourPotentialContainer}>
            <span className={styles.unlockYourPotentialContainer1}>
              <p className={styles.joinOurCommunity}>
                <span
                  className={styles.unlockYourPotential}
                >{`"Unlock your potential as a `}</span>
                <span className={styles.mentor}>{`Mentor `}</span>
                <span>and empower</span>
              </p>
              <p className={styles.joinOurCommunity}> others to thrive."</p>
            </span>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button3}>
              <div className={styles.ourPortfolio1}>
              <Link to="/mentors">
                <div className={styles.learnMore}>Get Started as a Mentor</div>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
                </Link>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.button5}>
                <div className={styles.getFreeEstimate}>
                  <div className={styles.learnMore}>Learn More</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.areas}>
        <div className={styles.exploreDiverseMentorshipAreParent}>
          <div className={styles.exploreDiverseMentorship}>
            Explore Diverse Mentorship Areas
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.businessAndEntrepreneurshipParent}>
              <b className={styles.businessAndEntrepreneurship}>
                Business and Entrepreneurship
              </b>
              <div className={styles.diveIntoThe}>
                Dive into the world of business and entrepreneurship. Our
                mentors in this area can provide valuable insights on topics
                like business strategy, marketing, finance, startups,
                leadership, and innovation
              </div>
              <div className={styles.button6}>
                <div className={styles.learnMore}>Read More</div>
                <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.businessAndEntrepreneurshipParent}>
              <b className={styles.artsAndCreativity}>Arts and Creativity</b>
              <div className={styles.diveIntoThe}>
                Unleash your creative potential with our mentors in the arts and
                creativity. Whether you're passionate about visual arts,
                writing, music, photography, or performing arts, our mentors can
                provide you with the necessary guidance and inspiration.
              </div>
              <div className={styles.button6}>
                <div className={styles.learnMore}>Read More</div>
                <img className={styles.vectorIcon4} alt="" src="/vector5.svg" />
              </div>
            </div>
            <div className={styles.technologyParent}>
              <b className={styles.technology}>Technology</b>
              <div className={styles.diveIntoThe}>
                Enhance your skills in the ever-evolving field of technology.
                Our technology mentors can guide you in areas such as software
                development, web design, data science, cybersecurity, artificial
                intelligence, and more
              </div>
              <div className={styles.button8}>
                <div className={styles.learnMore}>Read More</div>
                <img className={styles.vectorIcon4} alt="" src="/vector5.svg" />
              </div>
            </div>
          </div>
          <div className={styles.button9}>
            <div className={styles.ourPortfolio}>
              <div className={styles.learnMore}>Find Your Mentor</div>
              <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.desktop1Inner}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-5@2x.png"
              />
              <div className={styles.icons}>
                <div className={styles.div3} alt="" src="/vector6.svg"></div>
                <div className={styles.div3} alt="" src="/vector6.svg" ></div>
                <div className={styles.div3} alt="" src="/vector6.svg"></div>
                <div className={styles.div6}  alt="" src="/vector6.svg"></div>
              </div>
            </div>
            <div className={styles.pagesParent}>
              <b className={styles.maliniSindhuChennaiContainer}>Pages</b>
              <div className={styles.aboutUsMentorsContainer}>
                <p className={styles.joinOurCommunity}>About Us</p>
                <p className={styles.joinOurCommunity}>&nbsp;</p>
                <p className={styles.joinOurCommunity}>Mentors</p>
                <p className={styles.p}></p>
                <p className={styles.joinOurCommunity}>Sessions</p>
                <p className={styles.joinOurCommunity}>&nbsp;</p>
                <p className={styles.joinOurCommunity}>Sign up</p>
              </div>
            </div>
            <div className={styles.contact}>
              <b className={styles.contact1}>Contact</b>
              <div className={styles.mainStreetCityStateContainer}>
                <span className={styles.unlockYourPotentialContainer1}>
                  <p className={styles.joinOurCommunity}>
                    <span className={styles.mainStreetCityState}>
                      123 Main StreetCity, State 12345 contact@mentorhub.com
                    </span>
                    <span className={styles.span1}></span>
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
    </div>
  );
};

export default Desktop1;
