import React from "react";
import html2canvas from "html2canvas";
import screenShotButton from "./screen-shot-icon.svg";
import classNames from "classnames";
import styles from "./screenshot-button.css";

// Override the getContext method to set preserveDrawingBuffer to true
HTMLCanvasElement.prototype.getContext = function(origFn) {
    return function(type, attribs) {
        attribs = attribs || {};
        attribs.preserveDrawingBuffer = true;
        return origFn.call(this, type, attribs);
    };
}(HTMLCanvasElement.prototype.getContext);

const ScreenshotComponent = () => {
  const handleTakeScreenshot = () => {
    const elementId = 'canvas';
    const element = document.getElementById(elementId);
    if (element) {
      html2canvas(element, { useCORS: true, allowTaint: true }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = imgData;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      console.error('Element not found');
    }
  };
  
  return (
    <div>
      <img
        src={screenShotButton}
        alt=""
        className={classNames(styles.screenShotButton)}
        draggable={false}
        onClick={handleTakeScreenshot}
        title="Take Screenshot  "
      />
      {/* <canvas
        width="600"
        height="450"
        style={{ display: "none" }}
      ></canvas> */}
    </div>
  );
};

export default ScreenshotComponent;
