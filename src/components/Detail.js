import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Footer from "./Footer";
import Header from "./Header";

export default function Detail() {
  const location = useParams();
  const id = location.id;
  const [item, setData] = useState([]);

  console.log(item);

  useEffect(() => {
    const newData = data.filter((item) => item.id === id);
    setData(newData);
  }, []);

  return (
    <div>
      <Header />
      <div className="detail-flex">
        <div className="detail">
          <img className="dimg" src={item[0]?.gifUrl} alt="giturl" />
        </div>

        <div className="detail">
          <div className="text6">{item[0]?.name}</div>

          <div className="text7">
            Staying fit requires regular exercise, and the {item[0]?.name} bup
            is one of the most effective workouts for strengthening your{" "}
            {item[0]?.target}. This exercise not only targets the desired
            muscles but also promotes a positive mood and boosts your energy
            levels.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
