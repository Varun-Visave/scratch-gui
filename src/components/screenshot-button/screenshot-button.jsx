import React from "react";
import screenShotButton from "./screen-shot-icon.svg";
import classNames from "classnames";
import styles from "./screenshot-button.css";
import Canvas2Image from 'canvas2image-2';

// Override the getContext method to set preserveDrawingBuffer to true
// const origGetContext = HTMLCanvasElement.prototype.getContext;
// HTMLCanvasElement.prototype.getContext = function(type, attribs) {
//   attribs = attribs || {};
//   attribs.preserveDrawingBuffer = true;
//   return origGetContext.call(this, type, attribs);
// };

const ScreenshotComponent = () => {
  const handleTakeScreenshot = () => {
    const elementId = "canvas";
    const canvas = document.getElementById(elementId);
    const ctx = canvas.getContext('2d');


    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const gl = canvas.getContext("webgl", { preserveDrawingBuffer: true });
    if (!gl) {
      console.error(
        "Unable to initialize WebGL. Your browser may not support it."
      );
      return;
    }

    // Perform any WebGL operations here if needed
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Create and download the image using Canvas2Image
    Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height, 'screenshot.png');

    // Reset WebGL context to preserveDrawingBuffer: false
    gl.getExtension('WEBGL_lose_context').loseContext();
  };

  return (
    <div>
      <img
        src={screenShotButton}
        alt=""
        className={classNames(styles.screenShotButton)}
        draggable={false}
        onClick={handleTakeScreenshot}
        title="Take Screenshot"
      />
      <canvas id="canvas" width="600" height="450" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default ScreenshotComponent;
