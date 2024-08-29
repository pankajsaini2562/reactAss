import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormBuilder from "./components/FormBuilder";
export default function App() {
  return (
    <div>
      {" "}
      <DndProvider backend={HTML5Backend}>
        <div className="min-h-screen bg-gray-100 p-4">
          <h1 className="text-2xl font-bold text-center mb-8">
            Customizable Form Builder
          </h1>
          <FormBuilder />
        </div>
      </DndProvider>
    </div>
  );
}
