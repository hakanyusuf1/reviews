import React, { useState, useEffect } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = useState(people);
  const [id, setİd] = useState(person.length - (person.length - 1));

  const prevBtn = () => {
    if (id === 1) {
      setİd(4);
    } else {
      setİd(id - 1);
    }
  };

  const nextBtn = () => {
    if (id === 4) {
      setİd(1);
    } else {
      setİd(id + 1);
    }
  };
  const randomBtn = () => {
    setİd(Math.round(1 + Math.random() * (people.length - 1)));
  };

  return (
    <article className="review">
      {person
        .filter((person) => person.id === id)
        .map((item) => {
          return (
            <div key={id}>
              <div className="img-container">
                <img src={item.image} alt="" className="person-img" />
                <FaQuoteRight className="quote-icon" />
              </div>
              <h2 className="author">{item.name}</h2>
              <p className="job">{item.job}</p>
              <p className="info"> {item.text} </p>

              <div className="button-container">
                <button className="prev-btn" onClick={prevBtn}>
                  <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextBtn}>
                  <FaChevronRight />
                </button>
              </div>

              <button className="random-btn" onClick={randomBtn}>
                Suprize me
              </button>
            </div>
          );
        })}
    </article>
  );
};

export default Review;
