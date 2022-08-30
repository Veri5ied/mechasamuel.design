import { CardProps } from "./card";

const LeftCard = ({ imgUrl, title, content, linkUrl, linkName }: CardProps) => {
  return (
    <div className="left__card__container">
      <div className="card__container__left">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="card__container__right">
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          {linkName}
        </a>
      </div>
    </div>
  );
};

export default LeftCard;
