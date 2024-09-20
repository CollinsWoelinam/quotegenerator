import { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setFood((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i !== index));
    
  }

  return (
    <>
      <div>
        <h2>List of foods</h2>
        <ul>
          {food.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)} style={{cursor: "pointer"}}>
              {food}
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Enter food name" id="foodinput" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}
export default MyComponent;
