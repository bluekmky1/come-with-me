import { RefObject } from "react";
import styled from "styled-components";
import { useCanvas } from "./useCanvas";

const Canvas = styled.canvas``;

interface ExampleProps {
  stageWidth: number;
  stageHeight: number;
}

function Example({ stageWidth, stageHeight }: ExampleProps) {
  const fillgradient1 = (ctx: CanvasRenderingContext2D) => {
    var grd = ctx.createLinearGradient(
      stageWidth / 2,
      0,
      stageWidth / 2,
      stageHeight / 1.5
    );
    grd.addColorStop(1, "#845B7D");
    grd.addColorStop(0.5, "#B180A0");
    grd.addColorStop(0, "#F49486");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, stageWidth, stageHeight / 1.5);
  };
  const fillgradient2 = (ctx: CanvasRenderingContext2D) => {
    var grd = ctx.createLinearGradient(
      stageWidth / 1.5,
      stageHeight / 1.5,
      0,
      stageHeight / 1.5
    );
    grd.addColorStop(1, "#845B7D");
    grd.addColorStop(0.7, "#B180A0");
    grd.addColorStop(0, "#F49486");
    ctx.fillStyle = grd;
    ctx.fillRect(0, stageHeight / 1.5, stageWidth / 1.7, stageHeight);
  };

  const createSunPiece = (
    startAngle: number,
    endAngle: number,
    fillColor: string,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.beginPath();
    ctx.arc(
      stageWidth / 2,
      stageHeight / 3,
      stageWidth / 8,
      startAngle * Math.PI,
      endAngle * Math.PI
    );
    ctx.fillStyle = fillColor;
    ctx.fill();
  };

  const createMountain = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(stageWidth, stageHeight / 2);
    ctx.bezierCurveTo(
      stageWidth / 2,
      stageHeight / 1.6,
      stageWidth / 1,
      stageHeight / 2,
      stageWidth / 8,
      stageHeight
    );
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fillStyle = "#4C3749";
    ctx.fill();
  };

  const createMountain2 = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(stageWidth, stageHeight / 2.5);
    ctx.bezierCurveTo(
      stageWidth / 2,
      stageHeight / 1.6,
      stageWidth / 1,
      stageHeight / 4,
      stageWidth / 6,
      stageHeight
    );
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fillStyle = "#54435E";
    ctx.fill();
  };

  const createMountain3 = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(stageWidth, stageHeight / 2.3);
    ctx.bezierCurveTo(
      stageWidth / 2,
      stageHeight / 1.6,
      stageWidth / 1,
      stageHeight / 4,
      0,
      stageHeight / 1.5
    );
    ctx.lineTo(stageWidth, stageHeight / 1.5);
    ctx.fillStyle = "#83678B";
    ctx.fill();
  };

  const createMountain4 = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(stageWidth, stageHeight / 2.3);
    ctx.bezierCurveTo(
      stageWidth / 2,
      stageHeight / 1.8,
      stageWidth / 1,
      stageHeight / 4,
      stageWidth / 5,
      stageHeight / 1.3
    );
    ctx.lineTo(stageWidth, stageHeight / 1.3);
    ctx.fillStyle = "#62557C";
    ctx.fill();
  };

  const animate = (ctx: CanvasRenderingContext2D) => {
    fillgradient1(ctx);
    fillgradient2(ctx);
    createSunPiece(0, 2, "#AA718C", ctx);
    createSunPiece(0.85, 0.15, "#D58D98", ctx);
    createSunPiece(1, 2, "#E4A695", ctx);
    createSunPiece(1.15, 1.85, "#E4DBC6", ctx);
    createMountain3(ctx);
    createMountain4(ctx);
    createMountain2(ctx);
    createMountain(ctx);
  };

  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(
    stageWidth,
    stageHeight,
    animate
  );

  return <Canvas ref={canvasRef} />;
}

export default Example;
