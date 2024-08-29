import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const DraggableComponent = ({ component, index, moveComponent }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
    hover: (item) => {
      if (item.index !== index) {
        moveComponent(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COMPONENT,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`p-4 mb-2 border rounded bg-white shadow-md ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {component}
    </div>
  );
};

export default DraggableComponent;
