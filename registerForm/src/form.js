import React from "react";

const Form = ({ handleSubmit, fields, buttonVal }) => {
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
      <input type="submit" value={buttonVal} />
    </form>
  );
};

export default Form;
