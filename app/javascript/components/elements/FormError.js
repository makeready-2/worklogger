import React from "react"

const FormError = ({ error }) => {
  if (error) {
    return (
      <p>Error: {error}</p>
    )
  } else {
    return null;
  }
};

export default FormError
