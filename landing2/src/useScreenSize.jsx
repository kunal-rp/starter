import { useState, useEffect } from "react";

const SCREEN_SIZE_LEVELS = [
  0,
  640, // 0 - 640 SM
  768, // 640 - 768 MD
  1024, // 768 - 1024 LG
  1280, //
];

const useScreenSize = () => {
  const [screenSizeLevel, setScreenSizeLevel] = useState(0);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function calculateSizeLevel(width) {
    var res = 0;

    while (res < SCREEN_SIZE_LEVELS.length) {
      if (
        SCREEN_SIZE_LEVELS[res - 1] <= width &&
        width < SCREEN_SIZE_LEVELS[res]
      ) {
        return res;
      } else {
        res = res + 1;
      }
      if (res == SCREEN_SIZE_LEVELS.length) {
        return res;
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      console.log;
      setScreenSizeLevel(calculateSizeLevel(window.innerWidth));
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("load", handleResize);

    window.addEventListener("resize", handleResize);

    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSizeLevel;
};

export default useScreenSize;
