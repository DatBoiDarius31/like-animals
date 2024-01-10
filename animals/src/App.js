import AnimalShow from "./AnimalShow";
import {useState} from "react";

function getRandomAnimal() {
  const animals = ["cat", "dog", "bird", "cow", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {

  const handleClick = () => {
    setAnimals([...animals,getRandomAnimal()]);
  };

  const [animals, setAnimals] = useState([]);

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
 
  return (
    <div>
      <button
        onClick={handleClick}
      >
        Add Animal
      </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}
