import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
  return(
    <div id="cardList">    
      {
        robots.map((user, i) => {
          return(
            <Card
              key={robots[i].Num}
              Num={robots[i].Num}
              NameEn={robots[i].NameEn}
              NameAr={robots[i].NameAr}
              Branch={robots[i].Branch}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;