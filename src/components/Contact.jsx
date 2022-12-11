import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { motion } from 'framer-motion';
import useScroll from './useScroll';
import { contactAnimations } from 'animation';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [element, controls] = useScroll();
  const [user, setUser] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });
  const { userName, userEmail, userMessage } = user;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onReset = () => {
    setUser({ userName: '', userEmail: '', userMessage: '' });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolioEmail',
        'template_qolnuld',
        form.current,
        '20zJ-OwSKXGvO8Q9X'
      )
      .then(
        (result) => {
          alert('전송되었습니다.');
          onReset();
        },
        (error) => {
          alert('전송을 실패했습니다.');
        }
      );
  };

  return (
    <Section id="contact" ref={element}>
      <Title name="contact" left="0.5rem" />
      <motion.div
        className="contact"
        variants={contactAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: 'tween',
          duration: 0.8,
        }}
      >
        <div className="contactTitle">
          <p>안녕하세요!</p>
          <h2>Front-end 개발자 김주상입니다.</h2>
        </div>
        <div className="contactData">
          <div className="contactDataDescription">
            <p>
              사용자에게 좋은 경험을 제공할 수 있는 서비스를 만들겠다는 방향성을
              가지고 프론트엔드 개발자로서의 길을 걷고 있습니다.
            </p>
            <p>
              또한 협업의 가치와 즐거움에 비중을 두고, 원할한 의사소통을
              기반으로 좀 더 나은 서비스를 만들기 위해 고민하고 있습니다.
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
                <strong>교 육 과 정</strong> 청년취업사관학교 MSA 스페셜리스트
                과정
              </p>
            </div>
          </div>
          <form className="contactDataForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="name"
              required
              name="userName"
              onChange={onChange}
              value={userName}
            />
            <input
              type="email"
              placeholder="email"
              required
              name="userEmail"
              onChange={onChange}
              value={userEmail}
            />
            <textarea
              placeholder="message"
              required
              name="userMessage"
              onChange={onChange}
              value={userMessage}
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="submitButton"
            ></input>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding-top: 1px;
  background-color: #e3d7ea;
  .contact {
    color: black;
    margin: 0 23rem;
    .contactTitle {
      margin: 8rem 0;
      p {
        letter-spacing: 0.2rem;
        color: var(--tertiary-color);
      }
      h2 {
        color: var(--tertiary-color);
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
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            display: flex;
            box-sizing: border-box;
            strong {
              box-sizing: border-box;
              width: 8rem;
              color: var(--tertiary-color);
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
        .submitButton {
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      .contactTitle {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      .contactData {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
