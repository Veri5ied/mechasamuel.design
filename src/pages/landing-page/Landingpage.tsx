import { BsArrowDownCircle } from "react-icons/bs";
import LeftCard from "../../components/cards/LeftCard";
import RightCard from "../../components/cards/RightCard";
import Works from "../../components/cards/Works";
import { motion } from "framer-motion";
import {
  MySario,
  BeVerified,
  DesignSystem,
  Familiarity,
  Mixlr,
  Accessibility,
  SwipePlug,
  Throtty,
  LinkedIn,
  Behance,
  Medium,
  Twitter,
} from "../../assets";

const worksItem = [
  {
    caption: "Familiarity in UX",
    imgUrl: Familiarity,
    linkUrl: "https://link.medium.com/Z771jaaGSsb",
  },
  {
    caption: "Design System",
    imgUrl: DesignSystem,
    linkUrl: "https://link.medium.com/hwIJgkgGSsb",
  },
  {
    caption: "Accessibility in UX",
    imgUrl: Accessibility,
    linkUrl: "https://link.medium.com/ZvaGo7dGSsb",
  },
  {
    caption: "Mixlr UX case study",
    imgUrl: Mixlr,
    linkUrl: "https://link.medium.com/xQRQ7ykGSsb",
  },
];

const Landingpage = () => {
  return (
    <div className="landingpage__container">
      <div className="landingpage__hero">
        <div className="landingpage__hero--header">
          <h1>Hello, I'm Samuel</h1>
          <p>
            A product designer passionate about inclusive design and
            accessibility of products with seamless user experience.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="landingpage__arrow"
        >
          <BsArrowDownCircle
            color="#fff"
            size={40}
            style={{ cursor: "pointer" }}
          />
        </motion.div>
      </div>
      <div className="landingpage__projects">
        <div className="landingpage__projects--header">
          <h2>Featured Projects</h2>
          <div className="strokes"></div>
        </div>

        <div className="landingpage__project--cards">
          <LeftCard
            imgUrl={MySario}
            title="MySario"
            content="MySario is an application for university studentsto manage classes and easily generate class list for their lecturers"
            linkUrl="https://play.google.com/store/apps/details?id=com.mysario.app"
            linkName="View case study"
          />
          <RightCard
            imgUrl={BeVerified}
            title="Beverified"
            content="Beverified is a web application aimed at making it easy to authenticate your business to both your clients and potential clients all over the world."
            linkUrl=""
            linkName="View case study"
          />
          <LeftCard
            imgUrl={SwipePlug}
            title="SwipePlug"
            content="Swipeplug makes it easy to list your business and products to gain and retain customers online."
            linkUrl="https://www.Swipeplug.com"
            linkName="View Project"
          />
          <RightCard
            imgUrl={Throtty}
            title="Throtty"
            content="Customizing and shortening links made it easy."
            linkUrl=""
            linkName="View case study"
          />
        </div>
      </div>
      <div className="landingpage__work__samples">
        <div className="landingpage__work--header">
          <h2>Other Works</h2>
          <div className="strokes"></div>
        </div>
        <div className="works__list">
          {worksItem.map(({ caption, imgUrl, linkUrl }, index) => (
            <Works
              key={index}
              caption={caption}
              imgUrl={imgUrl}
              linkUrl={linkUrl}
            />
          ))}
        </div>
      </div>
      <div className="getintouch__container">
        <div className="getintouch--header">
          <h2>Get In Touch</h2>
          <div className="strokes"></div>
        </div>
        <div className="getintouch__content">
          <p>Mechaifeanyisamuel@gmail.com</p>
          <div className="social__profiles">
            <a
              href="https://medium.com/@samuelmechaife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Medium} alt="Medium" />
            </a>
            <a
              href="https://www.behance.net/samuelmechaife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Behance} alt="Behance" />
            </a>

            <a
              href="https://twitter.com/samuelmechaife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-mechaife-a-a8a8a813/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
