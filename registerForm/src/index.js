import React from "react";
import ReactDOM from "react-dom";

import RegisterControll from "./registerControll";

const App = () => {
  const formList = [
    {
      title: "Student Information",
      objKey: "studentInformation",
      fields: [
        { name: "firstName", placeholder: "enter firstname" },
        { name: "lastName", placeholder: "enter lastname" },
        { name: "dataOfBirth", placeholder: "enter data of birth" },
        { name: "email", placeholder: "enter email" }
      ]
    },
    {
      title: "Guardian Information",
      objKey: "guardianInformation",
      fields: [
        { name: "firstName", placeholder: "enter firstname" },
        { name: "lastName", placeholder: "enter lastname" },
        { name: "email", placeholder: "enter email" }
      ]
    },
    {
      title: "Parent Information",
      objKey: "guardianInformation",
      fields: [
        { name: "firstName", placeholder: "enter firstname" },
        { name: "lastName", placeholder: "enter lastname" }
      ]
    }
  ];

  return <RegisterControll formList={formList} />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
