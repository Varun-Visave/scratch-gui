import React from "react";
import screenRecordButton from "./screen-record-icon.svg";
import classNames from "classnames";
import styles from "./screenrecord-button.css";

const ScreenRecordComponent = () => {
  const handleScreenRecord = () => {
    console.log("testing...");
  };
  
  return (
    <div>
      <img
        src={screenRecordButton}
        alt=""
        className={classNames(styles.screenRecordButton)}
        draggable={false}
        onClick={handleScreenRecord}
        title="Start Screen Recording"
      />
    </div>
  );
};

export default ScreenRecordComponent;
