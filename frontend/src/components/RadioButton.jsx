import React from "react";

const RadioButton = ({ label }) => (
  <div className="mb-4">
    <label className="flex items-center">
      <input type="radio" className="form-radio" />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  </div>
);

export default RadioButton;
