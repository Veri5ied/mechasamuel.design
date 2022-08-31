interface WorksProps {
  imgUrl: string;
  caption: string;
  linkUrl: string;
}

const Works = ({ imgUrl, caption, linkUrl }: WorksProps) => {
  return (
    <div className="works__container">
      <img src={imgUrl} alt={caption} />
      <p>{caption}</p>
      <a href={linkUrl} target="_blank" rel="noreferrer">
        Read Article
        <div className="highlight"></div>
      </a>
    </div>
  );
};

export default Works;
