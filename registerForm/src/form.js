import React from "react";

const Form = ({ handleSubmit, fields }) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, placeholder }, index) => {
        return (
          <Field
            name={name}
            placeholder={placeholder}
            handleChange={handleChange}
            value={data ? data[name] : ""}
            key={index}
          />
        );
      })}
      <input type="submit" value="Save Data" />
    </form>
  );
};

export default Form;
