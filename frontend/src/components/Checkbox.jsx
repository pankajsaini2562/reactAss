// src/components/Checkbox.js
import React from "react";

const Checkbox = ({ label }) => (
  <div className="mb-4">
    <label className="flex items-center">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  </div>
);

export default Checkbox;
