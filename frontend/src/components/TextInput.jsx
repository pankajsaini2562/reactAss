// src/components/TextInput.js
import React from "react";

const TextInput = ({ label }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type="text"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
    />
  </div>
);

export default TextInput;
