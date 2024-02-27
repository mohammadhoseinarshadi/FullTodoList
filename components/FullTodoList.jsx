import React, { useState } from 'react';

const ToDoItem = ({ text, onDelete, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onComplete(); // فراخوانی تابع onComplete که در ToDoList تعریف شده است
  };

  const handleDelete = () => {
    onDelete(); // فراخوانی تابع onDelete که در ToDoList تعریف شده است
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
        {completed && <i className="fa fa-check" style={{ marginLeft: '5px' }}></i>}
      </span>
      <span>
        {!completed && (
          <>
            <button onClick={handleComplete}>Complete</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </span>
    </div>
  );
};

export default ToDoItem;
