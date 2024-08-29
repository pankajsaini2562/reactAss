import React from "react";

const Dropdown = ({ label }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </div>
);

export default Dropdown;
