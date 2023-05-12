import React from "react";
import { Link } from "react-router-dom";

export default function ExerciseCard({ item }) {
  return (
    <div className="exerciseitem" key={item.id}>
      <Link to={`/detail/${item.id}`}>
        <img src={item.gifUrl} alt="giturl" />

        <div className="cardflex">
          <div className="icard">{item.bodyPart}</div>
          <div className="icard2">{item.target}</div>
        </div>
        <div className="text5">{item.name}</div>
      </Link>
    </div>
  );
}
