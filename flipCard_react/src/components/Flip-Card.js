import "./flip-card.css";

export const FlipCard = ({ name, title, claim, imgPath }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imgPath} alt="bild" style={{ width: 300, height: 300 }} />
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{title}</p>
          <p>{claim}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
