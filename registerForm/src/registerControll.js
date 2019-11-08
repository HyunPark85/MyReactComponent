import React, { useState, useEffect } from "react";

import FormControll from "./formControll";

const RegisterControll = ({ formList }) => {
  let [data, setData] = useState({});
  let [currentPosition, setCurrentPosition] = useState(0);
  let [isTheEnd, setIsTheEnd] = useState(false);

  const addData = (objKey, newData, isEditMode, isTheEnd) => {
    setData({ ...data, [objKey]: newData });
    if (!isEditMode) {
      setCurrentPosition(++currentPosition);
    }
    if (isTheEnd) {
      setIsTheEnd(true);
    }
  };

  useEffect(() => {
    if (isTheEnd) {
      requestPost();
    }
  }, [data]);

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
          />
        );
      })}
    </div>
  );
};

export default RegisterControll;
