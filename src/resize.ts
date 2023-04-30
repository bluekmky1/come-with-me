import { RefObject, useEffect, useState } from "react";

export const useClientWidthHeight = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setheight] = useState<number>(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setheight(ref.current.clientHeight);
      }
    };
    setClientWidthHeight();

    window.addEventListener("resize", setClientWidthHeight);

    return () => {
      window.addEventListener("resize", setClientWidthHeight);
    };
  }, []);

  const clientRects = { width, height };

  return clientRects;
};
