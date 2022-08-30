import { BsArrowDownCircle } from "react-icons/bs";
import LeftCard from "../../components/cards/LeftCard";
import RightCard from "../../components/cards/RightCard";
import {
  MySario,
  BeVerified,
  DesignSystem,
  Familiarity,
  Mixlr,
  Accessibility,
  SwipePlug,
  Throtty,
} from "../../assets";

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
        <div className="landingpage__arrow">
          <BsArrowDownCircle
            color="#fff"
            size={40}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="landingpage__projects">
        <div className="landingpage__projects--header">
          <h2>Featured Projects</h2>
          <div className="strokes"></div>
        </div>

        <div className="landingpage__project--cards">
          {/*  <LeftCard
            imgUrl={MySario}
            title="MySario"
            content="MySario is an application for university students to manage classes and easily generate class list for their lecturers"
            linkUrl=""
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
            linkUrl=""
            linkName="View Project"
          />
          <RightCard
            imgUrl={Throtty}
            title="Throtty"
            content="Customizing and shortening links made it easy."
            linkUrl=""
            linkName="View case study"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
