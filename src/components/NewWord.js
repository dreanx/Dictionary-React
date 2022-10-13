import React from "react";

function NewWord() {
  return (
    <div>
      <form className="container" id="myForm">
        <input type="text" placeholder="French Word" />
        <input type="text" placeholder="English Word" />
        <input type="text" placeholder="Category" />
        <div>
          <input type="radio" name="M"></input>
          <label for="M">M</label>
        </div>
        <div>
          <input type="radio" name="F"></input>
          <label for="F">F</label>
        </div>
        <button type="button" id="wordToAdd">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewWord;
