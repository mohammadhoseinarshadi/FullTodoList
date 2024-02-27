import  { useState } from 'react';
import './ToDoList.css';
import ToDoItem from './components/FullTodoList';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setItems([...items, { text, completed: false }]);
    setText('');
  };

  const handleCompleteItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder="Add new todo..." />
        <button type="submit">Add</button>
      </form>
      <div>
        {items.map((item, index) => (
          <div key={index} className="todo-item">
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
              {item.completed && <i className="fa fa-check"></i>}
            </span>
            <span>
              {!item.completed && (
                <>
                  <button onClick={() => handleCompleteItem(index)}>Complete</button>
                  <button onClick={() => handleDeleteItem(index)}>Delete</button>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
