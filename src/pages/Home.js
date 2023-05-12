import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data.json";
import ExerciseCard from "../components/ExerciseCard";

export default function Home() {
  const navigate = useNavigate();
  const startData = data.slice(0, 6);
  const [datalist, setData] = useState(startData);

  const filterData = (type) => {
    let newData;
    if (type === "all") {
      newData = data.slice(0, 6);
    } else {
      newData = data.filter((item) => item.bodyPart === type).slice(0, 6);
    }
    console.log(newData);
    setData(newData);
  };

  const images = ["./images/f2.jpeg", "./images/f3.jpeg", "./images/f4.jpeg"];
  const [index, setIndex] = useState(0);
  const delay = 5000;

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div>
      <Header />
      <main className="main">
        <section>
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((image, index) => (
              <img className="slide" key={index} src={image} alt="slides" />
            ))}
          </div>
        </section>

        <section className="home-section1">
          <div className="text1">Transform Your Body, Transform Your Life</div>
          <div className="text1">Unlock Your Potential</div>
          <div className="text1">Strong Body, Strong Mind</div>

          <button onClick={() => navigate("/exercise")} className="but1">
            {" "}
            Checkout Exercises
          </button>
        </section>

        <section className="home-section2">
          <div className="text4">Exercises</div>

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
