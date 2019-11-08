import React, { useState, useEffect } from "react";

import FormControll from "./formControll";
import { request } from "http";

const RegisterControll = ({ formList }) => {
  let [data, setData] = useState({});
  let [currentPosition, setCurrentPosition] = useState(0);

  const addData = (objKey, newData, isEditMode) => {
    setData({ ...data, [objKey]: newData });
    if (!isEditMode) {
      setCurrentPosition(++currentPosition);
    }
  };

  const requestPost = () => {
    console.log(data);
  };

  return (
    <div
      className="register-container"
      style={{ width: "100%", height: "500px" }}
    >
      {formList.map(({ fields, title, objKey }, index) => {
        return (
          <FormControll
            fields={fields}
            title={title}
            objKey={objKey}
            addData={addData}
            requestPost={requestPost}
            currentPosition={currentPosition}
            position={index}
            key={index}
            isTheEnd={formList.length === index + 1}
            requestPost={requestPost}
          />
        );
      })}
    </div>
  );
};

export default RegisterControll;
