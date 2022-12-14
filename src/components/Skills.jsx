import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import skill1 from 'assets/skill1.png';
import skill2 from 'assets/skill2.png';
import skill3 from 'assets/skill3.png';
import skillLogo from 'assets/skillLogo.png';
import { motion } from 'framer-motion';
import useScroll from './useScroll';
import { skillsAnimations } from 'animation';

function Skills() {
  const [selected, setSelected] = useState(0);
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: 'Front-end',
      image: skill1,
    },
    {
      name: 'Version Control',
      image: skill2,
    },
    {
      name: 'Deployment',
      image: skill3,
    },
  ];
  return (
    <Section ref={element} id="skills">
      <Title name="skills" left="1rem" />
      <div className="bakground"></div>
      <div className="container">
        <div className="skills">
          {skillsData.map(({ name, image }, index) => {
            return (
              <motion.div
                className={`skill ${selected === index ? 'active' : 'hidden'}`}
                key={index}
                variants={skillsAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: 'tween',
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1 }}
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
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="controls"
          variants={skillsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: 'tween',
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? 'active' : ''}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? 'active' : ''}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? 'active' : ''}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .container {
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
      img {
        width: 30rem;
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .skills {
        width: 80%;
        .skill {
          .description {
            height: 18rem;
          }
        }
        img {
          width: 20rem;
        }
      }
    }
  }
`;

export default Skills;
