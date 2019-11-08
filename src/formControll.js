import React, {useState} from "react";

import Field from "./field";



/*
const formList = [
    {
        title: "student information", 
        objKey: "studentInformation",
        fields:[
            {name:"firstName", placeholder:"enter firstname"}, 
            {name:"lastName", placeholder: "enter lastname"},
            {name: "dataOfBirth", placeholder: "enter data of birth"},
            {name:"email", placeholder:"enter email"}
        ]
    }
]

savedData = {
    studentInformation: {
        firstName: "hyun",
        lastName: "park"
    }
}
*/

const FormControll = ({objKey, title, fields, savedData, addData, currentPosition, position, isEditButtonClicked, toggleEdit}) => {

    let [data, setData] = useState(savedData)
    let [isEditMode, setIsEditMode] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        addData(objKey, data, isEditMode)
        setIsEditMode(false)
    }

    const handleChange = (key, value) => {
        setData({...data, [key]: value})
    }

    const displayForm = () => {
        if(currentPosition === position || isEditMode){
        return (
            <form onSubmit={handleSubmit}>
            {fields.map(({name, placeholder}, index) => {
                return(
                <Field 
                    name={name} 
                    placeholder={placeholder} 
                    handleChange={handleChange} 
                    value={data ? data[name] : ""}
                    key={index}
                />
                )
            })}
            <input type="submit" value="Save Data"/>
        </form>
        )
        }
    }

    const handleEditButton = () => {
        setIsEditMode(true)
    }


    const displayEditButton = () => {
        if(data && currentPosition !== position && !isEditMode){
        return (
        <button onClick={handleEditButton}>Edit</button>
        )
        }
    }

    return(
        <div className="container" style={{width: "100%", height: "100px"}}>
            <hr style={{backgroundColor:"black", height: "3px"}}/> 
            <h1 style={{display:"inline"}}>{position + 1}. {title}</h1> 
            {displayEditButton()}
           {displayForm()}
        </div>
    )
}

export default FormControll;