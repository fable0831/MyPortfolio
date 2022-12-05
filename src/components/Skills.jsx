import React, { useState } from "react";
import Title from "./Title";
import styled from "styled-components";
import skill1 from "assets/skill1.png";
import skill2 from "assets/skill2.png";
import skill3 from "assets/skill3.png";
import skillLogo from "assets/skillLogo.png";

function Skills() {
  const [selected, setSelected] = useState(0);
  const skillsData = [
    {
      name: "Front-end",
      image: skill1,
    },
    {
      name: "Version Control",
      image: skill2,
    },
    {
      name: "차후 업데이트",
      image: skill3,
    },
  ];
  return (
    <Section>
      <Title name="skills" left="1rem" />
      <div className="bakground"></div>
      <div className="container">
        <div className="skills">
          {skillsData.map(({ name, image }, index) => {
            return (
              <div
                className={`skill ${selected === index ? "active" : "hidden"}`}
                key={index}
              >
                <div className="image">
                  <div className="circle1"></div>
                  <div className="circle2">
                    <img src={skillLogo} alt="skillLogo" />
                  </div>
                </div>
                <div className="title">
                  <h3 className="name">{name}</h3>
                </div>
                <img src={image} alt="skillImage" />
              </div>
            );
          })}
        </div>
        <div className="controls">
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .container {
    background-color: #fff78d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .skills {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .skill {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        .image {
          margin-top: 2rem;
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #f6bbd9;
            img {
              width: 10rem;
              height: 10rem;
            }
          }
        }
        img {
          height: 70%;
        }
      }
      .title {
        h3 {
          font-size: 2rem;
          color: var(--secondary-color);
        }
      }
      .hidden {
        display: none;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border-color: var(--secondary-color);
      }
    }
  }
`;

export default Skills;
