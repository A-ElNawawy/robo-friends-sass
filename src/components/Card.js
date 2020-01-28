import React from "react";
import './Card.css';

const Card = ({Num, NameEn, NameAr, Branch}) => {
  return(
    <div id="card">
      <img src={`https://robohash.org/${Num}`} alt="Robot" />
      <div>
        <p>{Num}</p>
        <h2>{NameEn}</h2>
        <h2>{NameAr}</h2>
        <p>{Branch}</p>
      </div>
    </div>
  );
}

export default Card;