import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Python",
          "PyGame",
          "SQLAlchemy",
          "Flask",
          "NodeJS",
          "JavaScript",
          "HTML",
          "CSS",
          "BootStrap",
          "ReactJS",
          "Git",
          "GitHub",
          "Google Cloud Azure",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
