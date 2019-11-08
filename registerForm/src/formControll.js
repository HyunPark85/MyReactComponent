import React, {useState} from "react";

import Field from "./field";

const FormControll = ({objKey, title, fields, addData, currentPosition, position}) => {

    let [data, setData] = useState({})
    let [isEditMode, setIsEditMode] = useState(false);
    let [currentEditingPosition, setCurrentEditingPosition] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        addData(objKey, data, isEditMode)
        setIsEditMode(false)
    }

    const handleChange = (key, value) => {
        setData({...data, [key]: value})
    }

    const displayForm = () => {
        if(isEditMode || currentPosition === position){
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
        setCurrentEditingPosition(position)
    }


    const displayEditButton = () => {
        if(data && currentPosition !== position && !isEditMode){
        return (
        <button onClick={handleEditButton}>Edit</button>
        )
        }
    }

    const displaySummary = () => {
        if(!data || currentPosition === position || isEditMode){
            return "";
        }
        let values = Object.values(data)
        return(
            <ul>
                {values.map((val,key) => {
                    return(
                        <li key={key}>{val}</li>
                    )
                })}
            </ul>
        )
    }

    return(
        <div className="container" style={{width: "100%"}}>
            <hr style={{backgroundColor:"black", height: "3px"}}/> 
            <h1 style={{display:"inline"}}>{position + 1}. {title}</h1> 
            {displayEditButton()}
           {displayForm()}
           {displaySummary()}
        </div>
    )
}

export default FormControll;