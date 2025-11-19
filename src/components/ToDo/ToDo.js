import React, { useState } from "react";
import "./ToDo.css";
import Button from "../../common/Button/Button";
import Sinchan from "../../assets/sinchan.jpg";
import Card from "../../common/Card/Card";

export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  // const handleSubmit = () => {
  //   setTask((prevState) => [...prevState, inputValue]);
  //   setInputValue("");
  // };

   const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return; // don't add empty tasks

    // store task as an object: { text, completed }
    setTask((prevState) => [
      ...prevState,
      { text: trimmed, completed: false }
    ]);
    setInputValue("");
  };


  const handleDelete = (indexToDelete) => {
    setTask((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const toggleComplete = (index) => {
    setTask((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="center">
      <div className="text-box">
        <p className="organise">Organise Your Activities Better </p>
        <div className="image-container">
          <img src={Sinchan} alt="sinchan" />
        </div>
      </div>
      <div className="cardbox-container">
        <div className="Card-box">
          <h1 className="todo-item1">To-Do List</h1>
          <div className="item3">
            <input
              placeholder="write here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button name="submit" onTaskSubmit={handleSubmit} />
          </div>
          <div className="content">
            {task.map((item, index) => (
              <Card
                key={index}
                cardData={item}
                onDelete={() => handleDelete(index)}
                onToggle={() => toggleComplete(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
