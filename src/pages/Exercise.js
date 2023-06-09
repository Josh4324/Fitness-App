import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ExerciseCard from "../components/ExerciseCard";
import data from "../data.json";

export default function Exercise() {
  const startData = data.slice(0, 50);
  const [datalist, setData] = useState(startData);
  const searchRef = useRef();

  const filterData = (type) => {
    let newData;
    if (type === "all") {
      newData = data.slice(0, 50);
    } else {
      newData = data.filter((item) => item.bodyPart === type).slice(0, 50);
    }

    setData(newData);
  };

  const searchData = () => {
    let newData;
    const text = searchRef.current.value;
    if (text === "") {
      newData = data.slice(0, 50);
    } else {
      newData = data
        .filter(
          (item) =>
            item.name.includes(text.toLowerCase()) ||
            item.bodyPart.includes(text.toLowerCase())
        )
        .slice(0, 50);
    }

    setData(newData);
  };

  return (
    <div>
      <Header />
      <main>
        <section className="exercise-section1">
          <input
            ref={searchRef}
            className="search"
            placeholder="Search Exercise"
            onChange={searchData}
          />
        </section>
        <section className="exercise-section2">
          <div className="exerciseList">
            <div onClick={() => filterData("all")} className="ecard">
              All
            </div>
            <div onClick={() => filterData("back")} className="ecard">
              Back
            </div>
            <div onClick={() => filterData("cardio")} className="ecard">
              Cardio
            </div>
            <div onClick={() => filterData("chest")} className="ecard">
              Chest
            </div>
            <div onClick={() => filterData("lower arms")} className="ecard">
              Lower Arms
            </div>
            <div onClick={() => filterData("lower legs")} className="ecard">
              Lower Legs
            </div>
            <div onClick={() => filterData("neck")} className="ecard">
              Neck
            </div>
            <div onClick={() => filterData("shoulders")} className="ecard">
              Shoulder
            </div>
            <div onClick={() => filterData("upper arms")} className="ecard">
              Upper Arms
            </div>
            <div onClick={() => filterData("upper legs")} className="ecard">
              Upper Legs
            </div>
            <div onClick={() => filterData("waist")} className="ecard">
              Waist
            </div>
          </div>
          <div className="exerciseList2">
            {datalist.map((item) => {
              return <ExerciseCard item={item} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
