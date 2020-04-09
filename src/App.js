import React from "react";
import "./styles.css";
import DraggableGraph from "./DraggableData";
import CrazyLine from "./CrazyLine";

export default () => {
  return (
    <div className="App">
      <h1>My Draggable Chartjs Demo</h1>
      <h2>By: Mohammad</h2>
      <DraggableGraph />
      <CrazyLine />
    </div>
  );
};
