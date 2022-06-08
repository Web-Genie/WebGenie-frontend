import { drag } from "../utils/index";

function TextBoxChoice() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Text Box</p>
      </div>
      <div className="textBoxChoice">
        <input
          draggable
          id="textbox"
          className="textbox"
          placeholder="Enter Something"
          onDragStart={drag}
        />
      </div>
    </div>
  );
}

export default TextBoxChoice;
