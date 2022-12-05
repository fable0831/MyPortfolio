import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

:root {
  --primary-color: #f6bbd9;
  --secondary-color: #00b9ef;
  --font-family: "Poppins", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  height: 100%;
  overflow-x: hidden;
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
  body::-webkit-scrollbar {
    display: none;
  }
}

body {
  overflow-x: hidden;
}

body,
button {
  font-family: var(--font-family);
}

::-webkit-scrollbar {
  background-color: var(--primary-color);
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--secondary-color);
}

`;

export default GlobalStyle;
