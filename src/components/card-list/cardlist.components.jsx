import React from "react";
import "../card-list/18.3 card-list.styles.css.css";
import { Card } from "../card/card.component";
export const CardList = (p) => {
  return (
    <div className="card-list">
      {p.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
