import React from "react";
import styled from "styled-components";
import Title from "./Title";

function Contact() {
  return (
    <Section id="contact">
      <Title name="contact" />
      <div className="contact">
        <div className="contactTitle">
          <p>안녕하세요!</p>
          <h2>Front-end 개발자 김주상입니다.</h2>
        </div>
        <div className="contactData">
          <div className="contactDataDescription">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
              sapiente.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, eos.
            </p>
            <div>
              <p>
                <strong>이 메 일</strong> fable0831@gmail.com
              </p>
              <p>
                <strong>전 화 번 호</strong> 010-4570-5464
              </p>
              <p>
                <strong>주 소</strong> 서울특별시 세곡동
              </p>
              <p>
                <strong>교 육 과 정</strong> 청년취업사관학교(SeSAC) MSA
                스페셜리스트 과정
              </p>
            </div>
          </div>
          <div className="contactDataForm">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    .contactTitle {
      margin: 6rem 0;
      p {
        letter-spacing: 0.2rem;
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    .contactData {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      .contactDataDescription {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            display: flex;
            strong {
              box-sizing: border-box;
              width: 10rem;
            }
          }
        }
      }
      .contactDataForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          letter-spacing: 0.2rem;
          width: 100%;
          padding-bottom: 0.7rem;
          :focus {
            outline: none;
          }
          ::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          :hover {
            background-color: var(--secondary-color);
            color: white;
          }
        }
      }
    }
  }
`;

export default Contact;
