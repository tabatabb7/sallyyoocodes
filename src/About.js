import React from "react";
import "./App.css";
import splash from "./splash.png";

const About = () => (
  <div className="App">
    <img
      src={splash}
      alt="woman looking through binoculars"
      className="splash"
    />
    <div className="aboutme">
      <p>
        I'm a software engineer recently graduated from the Grace Hopper Program
        at Fullstack Academy. I originally studied theatre at New York
        University before taking off on a 5-year adventure to South Korea, where
        I worked in food, fashion, writing, and acting.
      </p>
      <p>
        Having newly returned to the States, I began my coding journey with free
        code camps and courses online. I had my "a-ha" moment after getting
        accepted into Grace Hopper, and falling in love with learning new
        frameworks and technologies. One of my favorite things is starting off
        with a single line of code and breathing life into an app with a
        technology I didn't know only a day before.
      </p>
      <p>
        I was fortunate enough to study programming in a remote environment
        where I got to mimic a real work situation. I have thoroughly enjoyed
        meeting my classmates online, and further appreciated getting to
        pair-program and debug through Zoom. I am eager to bring this energy and
        enthusiasm for remote pair-programming to my future team!
      </p>
    </div>
  </div>
);

export default About;
