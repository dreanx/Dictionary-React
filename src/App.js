import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const initialList = [
    { french: "bonjour", english: "hello", category: "misc", gender: "FM", id: 1 },
    { french: "au revoir", english: "goodbye", category: "misc", id: 2 },
  ];

  //The states
  const [list, setList] = React.useState(initialList);
  const [french, setFrench] = React.useState(" ");
  const [english, setEnglish] = React.useState(" ");
  const [category, setCategory] = React.useState(" ");

  //The functions that actualizes everytime a character is added in the corresponding input fields the values to add to the submit function
  function handleChangeF(event) {
    setFrench(event.target.value);
  }
  function handleChangeE(event) {
    setEnglish(event.target.value);
  }
  function handleChangeC(event) {
    setCategory(event.target.value);
  }

  //The Submit click function, which adds the new words to the ul as a li (re-renders the whole list everytime)
  const [count, setCount] = React.useState(3);
  function handleAdd() {
    const newList = list.concat({ french, english, category, id: count });
    setCount(count + 1);
    setList(newList);
    setFrench("");
    setEnglish("");
    setCategory("");
    console.log(newList);
  }

  //The radio button uncheck shenenigans
  const [checked, setChecked] = React.useState({ apple: true, orange: false });

  const changeRadio = (e) => {
    setChecked(() => {
      return {
        M: false,
        F: false,
        FM: false,
        [e.target.value]: true,
      };
    });
  };

  return (
    <div>
      <div className="m-20 text-green-700 " id="myForm">
        <input className="rounded mr-10 border-2 bg-blue-100 mt-50"
          type="text"
          placeholder="French Word"
          value={french}
          onChange={handleChangeF}
        />
        <input
          type="text" className="rounded mr-10 border-2 bg-red-100"
          placeholder="English Word"
          value={english}
          onChange={handleChangeE}
        />
        <input className="rounded border-2 bg-green-100"
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleChangeC}
        />
        <div>
          <input
          className="mt-5"
            type="radio"
            name="M"
            value="M"
            checked={checked.M}
            onChange={changeRadio}
          ></input>
          <label for="M">M</label>
        </div>
        <div>
          <input
            type="radio"
            name="F"
            value="F"
            checked={checked.F}
            onChange={changeRadio}
          ></input>
          <label for="F">F</label>
        </div>
        <div>
          <input
            type="radio"
            name="FM"
            value="FM"
            checked={checked.FM}
            onChange={changeRadio}
          ></input>
          <label for="FM">FM</label>
        </div>
        <button className="mt-5 w-1/12 border-2 hover:bg-purple-300" type="button" id="wordToAdd" onClick={handleAdd}>
          Submit
        </button>
      </div>

      <ul className="m-20">
        {list.map((word) => (
          <li className="" key={word.id}>
            {word.french} : {word.english} ({word.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
