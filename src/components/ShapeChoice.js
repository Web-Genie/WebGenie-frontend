import { drag } from "../utils";

function ShapeChoice() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Shape</p>
      </div>
      <div className="shapeChoices">
        <div draggable id="sqaure" className="square" onDragStart={drag}></div>
        <div draggable id="circle" className="circle" onDragStart={drag}></div>
        <div
          draggable
          id="triangle"
          className="triangle"
          onDragStart={drag}
        ></div>
      </div>
    </div>
  );
}

export default ShapeChoice;
