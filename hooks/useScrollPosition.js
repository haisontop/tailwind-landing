import { useCallback, useEffect, useRef, useState } from "react";

const useScrollPosition = (height = 100) => {
  const [showElement, setShowElement] = useState(false);
  const showElementRef = useRef(showElement);
  const setShowElementRef = (data) => {
    showElementRef.current = data;
    setShowElement(data);
  };

  const handleScroll = useCallback(
    async (scrollHeight) => {
      if (scrollHeight > height && !showElementRef.current) {
        setShowElementRef(true);
      } else if (scrollHeight < 300 && showElementRef.current) {
        setShowElementRef(false);
      }
    },
    [setShowElementRef, showElementRef]
  );

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      handleScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return showElement;
};

export default useScrollPosition;
