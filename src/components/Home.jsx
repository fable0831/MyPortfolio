import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import home from "assets/home.jpg";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>
              KimJooSang <br />
              Portfolio
            </h1>
          </div>
          <div className="subtitle">
            <p>
              안녕하세요 프론트엔드 개발자 김주상입니다. 가장 중요한 것은
              사용자들에게 좋은 서비스 경험을 제공하는 것이라고 생각하여,
              스스로가 사용자 입장에 서서 고민하며 개발하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="info">
        <div className="grid">
          <div className="col">
            <strong>이 름</strong>
            <p>김 주 상</p>
          </div>
          <div className="col">
            <strong>생 년 월 일</strong>
            <p>90. 08. 31</p>
          </div>
          <div className="col">
            <strong>거 주 지</strong>
            <p>서울특별시 세곡동</p>
          </div>
          <div className="col">
            <strong>연 락 처</strong>
            <p>010-4570-5464</p>
          </div>
          <div className="col">
            <strong>이 메 일</strong>
            <p>fable0831@gmail.com</p>
          </div>
          <div className="col">
            <strong>청년취업사관학교(SeSAC)</strong>
            <p>MSA 스페셜리스트 과정</p>
          </div>
        </div>
      </div> */}
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subtitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }
  }
`;

export default Home;
