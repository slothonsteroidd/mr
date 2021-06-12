import React from "react";
import "../card/19.1 card.styles.css.css";

export const Card = (prop) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${prop.monster.id}?set=set2`}
        alt=""
        srcset=""
      />
      <h1 key={prop.monster.key}>{prop.monster.name}</h1>
      <p>{prop.monster.email}</p>
    </div>
  );
};
