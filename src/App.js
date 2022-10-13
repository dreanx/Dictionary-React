import React from "react";
import "./App.css";

function App() {
  const initialList = [
    { french: "bonjour", english: "hello", category: "misc", id: 1 },
    { french: "au revoir", english: "goodbye", category: "misc", id: 2 },
  ];

  const [list, setList] = React.useState(initialList);
  const [french, setFrench] = React.useState(" ");

  function handleChangeF(event) {
    setFrench(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ french });
    setList(newList);
    console.log(newList);
  }

  return (
    <div>
      <div className="container" id="myForm">
        <input
          type="text"
          placeholder="French Weord"
          value={french}
          onChange={handleChangeF}
        />
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
        <button type="button" id="wordToAdd" onClick={handleAdd}>
          Submit
        </button>
      </div>

      <ul>
        {list.map((word) => (
          <li key={word.id}>{word.french} :</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
