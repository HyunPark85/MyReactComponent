import React from "react";

const Field = ({name, placeholder, handleChange, value}) => {

    const changeValue = (e) => {
        handleChange(name, e.target.value)
    }

    return(
        <>
        <input type="text" name={name} placeholder={placeholder} onChange={changeValue} value={value}/>
        </>
    )
}

export default Field;