import React from "react";
import { BsArrowUp } from "react-icons/bs";
import BackToTop from "react-back-to-top-button";
const ScrollFab = () => {
  return (
    <BackToTop showAt={100} speed={1} easing="easeOutSine">
      <BsArrowUp className="arrow-up scroll" />
    </BackToTop>
  );
};

export default ScrollFab;
