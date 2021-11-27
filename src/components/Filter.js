import React, { useState } from "react";

const Filter = ({ todos, setFilter, clearCompleted }) => {
  const [isSelected, setIsSelected] = useState({
    all: true,
    active: false,
    completed: false,
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todos.filter((todo) => todo.complete === false).length}
        </strong>{" "}
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={isSelected.all ? "selected" : ""}
            href="!#"
            onClick={() => {
              setFilter();
              setIsSelected({
                all: !isSelected.all,
                active: false,
                completed: false,
              });
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={isSelected.active ? "selected" : ""}
            href="!#"
            onClick={() => {
              setFilter(false);
              setIsSelected({
                all: false,
                active: !isSelected.active,
                completed: false,
              });
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={isSelected.completed ? "selected" : ""}
            href="!#"
            onClick={() => {
              setFilter(true);
              setIsSelected({
                all: false,
                active: false,
                completed: !isSelected.completed,
              });
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Filter;
