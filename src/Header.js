import React from "react";
import "./App.css";

let marginY = 0;
let destination = 0;
let speed = 15;
let scroller = null;

const initScroll = (elementId) => {
  destination = document.getElementById(elementId).offsetTop;
  scroller = setTimeout(() => {
    initScroll(elementId);
  }, 1);
  marginY += speed;
  if (marginY >= destination) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
};

// const toTop = () => {
//   destination = document.getElementById(elementId).offsetTop;
//   scroller = setTimeout(() => {
//     initScroll(elementId);
//   }, 1);
//   marginY -= speed;
//   if (marginY <= 0) {
//     clearTimeout(scroller);
//   }
//   window.scroll(0, marginY);
// };

const Header = () => (
  <header className="header">
    <div className="title">
      <div className="nameplate">
        <h1 className="header">
          <a onClick={() => initScroll("top")} href="#top">
            SALLY YOO
          </a>
        </h1>
      </div>

      <div>
        <nav>
          <div className="links">
            <a onClick={() => initScroll("projects")} href="#projects">
              PROJECTS
            </a>
            <br />
            <br />
            <a onClick={() => initScroll("experience")} href="#experience">
              EXPERIENCE
            </a>
            <br />
            <br />
            <a href="mailto:yoosallyh@gmail.com?subject=HELLO!">CONTACT</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
