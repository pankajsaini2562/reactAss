import React, { useState } from "react";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Dropdown from "./Dropdown";
import DraggableComponent from "./DraggableComponent";

const FormBuilder = () => {
  const [components, setComponents] = useState([]);

  const moveComponent = (fromIndex, toIndex) => {
    const updatedComponents = [...components];
    const [movedComponent] = updatedComponents.splice(fromIndex, 1);
    updatedComponents.splice(toIndex, 0, movedComponent);
    setComponents(updatedComponents);
  };

  const addComponent = (Component, label) => {
    const newComponent = <Component key={components.length} label={label} />;
    setComponents([...components, newComponent]);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-200 rounded-md">
        <h2 className="font-bold mb-4">Add Components</h2>
        <button
          className="w-full mb-2 py-2 bg-blue-500 text-white rounded"
          onClick={() => addComponent(TextInput, "Text Input")}
        >
          Add Text Input
        </button>
        <button
          className="w-full mb-2 py-2 bg-blue-500 text-white rounded"
          onClick={() => addComponent(Checkbox, "Checkbox")}
        >
          Add Checkbox
        </button>
        <button
          className="w-full mb-2 py-2 bg-blue-500 text-white rounded"
          onClick={() => addComponent(RadioButton, "Radio Button")}
        >
          Add Radio Button
        </button>
        <button
          className="w-full mb-2 py-2 bg-blue-500 text-white rounded"
          onClick={() => addComponent(Dropdown, "Dropdown")}
        >
          Add Dropdown
        </button>
      </div>

      <div className="w-3/4 p-4 bg-white rounded-md shadow-md">
        <h2 className="font-bold mb-4">Your Form</h2>
        {components.map((component, index) => (
          <DraggableComponent
            key={index}
            component={component}
            index={index}
            moveComponent={moveComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
