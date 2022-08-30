import { CardProps } from "./card";

const RightCard = ({
  imgUrl,
  title,
  content,
  linkUrl,
  linkName,
}: CardProps) => {
  return (
    <div className="right__card__container">
      <div className="card__container__left">
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          {linkName}
          <div className="highlight"></div>
        </a>
      </div>
      <div className="card__container__right">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default RightCard;
