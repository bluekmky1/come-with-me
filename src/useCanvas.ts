import { useEffect, useRef } from "react";

export const useCanvas = (
  stageWidth: number,
  stageHeight: number,
  animate: (ctx: CanvasRenderingContext2D) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // console.log(canvasRef.current); 찍어보면 캔버스가 찍히는것을 알 수 있음
  console.log(stageWidth, stageHeight);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    const setCanvas = () => {
      if (canvas) {
        canvas.width = stageWidth * 2;
        canvas.height = stageHeight * 2;
        ctx.scale(2, 2);
      }
    };
    setCanvas();

    let requestId: number;
    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation);
      if (ctx) {
        animate(ctx);
      }
    };
    requestAnimation();
    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, [stageWidth, stageHeight, animate]);

  return canvasRef;
};
