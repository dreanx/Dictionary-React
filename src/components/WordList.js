import React from "react";


const initialList = [
    { french: "bonjour", english: "hello", category: "misc", id: 1 },
    { french: "au revoir", english: "goodbye", category: "misc", id: 2 },
  ];
  
export default function WordList() {
  return (
    <ul>
      {initialList.map((word) => (
        <li key={word.id}>{word.french} : {word.english} ({word.category})</li>
      ))}
    </ul>
  );
}
