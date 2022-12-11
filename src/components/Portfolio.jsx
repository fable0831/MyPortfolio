import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import placeholder from 'assets/placeholder.png';
import github from 'assets/github.png';
import portfolio from 'assets/portfolio.png';
import cloudLibrary from 'assets/cloudLibrary.gif';
import useScroll from './useScroll';
import { motion } from 'framer-motion';
import { portfolioAnimations } from 'animation';

function Portfolio() {
  const [element, controls] = useScroll();

  const portfolioData = [
    {
      portfolioImage: portfolio,
      title: 'Portfolio Website',
      subTitle: '개인 프로젝트',
      description:
        '포트폴리오 용으로 제작한 사이트입니다. React와 styled-components를 사용하여 반응형 웹사이트로 제작하였습니다. ',
    },
    {
      portfolioImage: cloudLibrary,
      title: 'Cloud Library',
      subTitle: '6인 팀 프로젝트',
      description:
        'Cloud Library는 한 번의 회원가입, 통합 도서 데이터 관리로 도서관 관리자와 사용자에게 하나의 도서관을 제공하는 서비스입니다 ',
    },
    {
      portfolioImage: placeholder,
      title: '제작중',
      subTitle: '개인 프로젝트',
      description: '제작중인 사이트입니다 ',
    },
  ];

  return (
    <Section id="portfolio" ref={element}>
      <Title name={'portfolio'} />
      <div className="decoration"></div>
      <div className="portfolios">
        {portfolioData.map(
          ({ title, subTitle, description, portfolioImage }) => {
            return (
              <motion.div
                className="portfolio"
                key={title}
                variants={portfolioAnimations}
                animate={controls}
                transition={{ delay: 0.03, type: 'tween', duration: 0.8 }}
              >
                <div className="image">
                  <img src={portfolioImage} alt="PortfolioImg" />
                </div>
                <div className="title">
                  <h3>{title}</h3>
                </div>
                <span className="subTitle">{subTitle}</span>
                <div className="description">
                  <p>{description}</p>
                </div>
                <div className="more">
                  <img src={github} alt="play" />
                  <span>Read More</span>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: #433b76;
  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--tertiary-color);
    left: 15%;
    top: -3rem;
    opacity: 0.7;
    z-index: 1;
  }
  .portfolios {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    .portfolio {
      padding: 1rem;
      margin-top: 4rem;
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 2rem;
    }
    .image {
      height: 22rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20rem;
        width: 20rem;
      }
    }
    .title {
      h3 {
        text-align: center;
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    .subTitle {
      text-align: center;
      color: var(--tertiary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 10rem;
      color: black;
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--tertiary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 0rem;
    .decoration {
      display: none;
    }
    .portfolios {
      padding: 0rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
    .portfolio {
      padding: 0rem;
      margin: 0rem;
    }
    .image {
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 18rem;
        width: 18rem;
      }
    }
  }
`;

export default Portfolio;
