import { BsArrowDownCircle } from "react-icons/bs";

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
      </div>
    </div>
  );
};

export default Landingpage;
