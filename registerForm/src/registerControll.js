import React, {useState, useEffect } from "react";

import FormControll from "./formControll";

const RegisterControll = () => {
    
    let [ data, setData ] = useState({})
    let [currentPosition, setCurrentPosition] = useState(0)

    const addData = (objKey,newData, isEditMode) => {
        setData({...data,[objKey]: newData})
        if(!isEditMode){
        setCurrentPosition(++currentPosition)
        }
    }

    const requestPost = () => {
        console.log(data)
    }

    const formList = [
        {
            title: "Student Information", 
            objKey: "studentInformation",
            fields:[
                {name:"firstName", placeholder:"enter firstname"}, 
                {name:"lastName", placeholder: "enter lastname"},
                {name: "dataOfBirth", placeholder: "enter data of birth"},
                {name:"email", placeholder:"enter email"}
            ]
        },
        {
            title: "Guardian Information", 
            objKey: "guardianInformation",
            fields:[
                {name:"firstName", placeholder:"enter firstname"}, 
                {name:"lastName", placeholder: "enter lastname"},
                {name:"email", placeholder:"enter email"}
            ]
        },
        {
            title: "Parent Information", 
            objKey: "guardianInformation",
            fields:[
                {name:"firstName", placeholder:"enter firstname"}, 
                {name:"lastName", placeholder: "enter lastname"},
            ]
        }
    ]

    return(
        <div className="register-container" style={{width: "100%", height:"500px"}}>
            {formList.map(({fields, title, objKey}, index)=>{
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
                />
                )
            })}
        </div>
    )

}

export default RegisterControll;

