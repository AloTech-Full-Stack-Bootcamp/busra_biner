import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const [todoEdit, setTodoEdit] = useState(null);
  const [edit, setEdit] = useState("");

  const [filter, setFilter] = useState();

  function inputChange(e) {
    setTodo(e.target.value);
  }

  // submit function
  function formSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: todo, complete: false },
      ]);
    }

    setTodo("");
  }

  // complete function
  function toggleCompleted(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // edit function
  function editTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = edit;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setTodoEdit(null);
    setEdit("");
  }

  // delete function
  function deleteClick(id) {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  const clearCompleted = () => {
    setTodos(todos.filter((t) => t.done !== true));
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={formSubmit}>
            <input
              className="new-todo"
              name="todo"
              type="text"
              value={todo}
              placeholder="What needs to be done?"
              onChange={inputChange}
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos
              .filter((todo) =>
                filter !== undefined ? todo.complete === filter : todo
              )
              .map((todo) => (
                <li
                  className={todo.complete ? "completed" : ""}
                  key={todo.text}
                >
                  <div className="view">
                     <input
                      className="toggle"
                      type="checkbox"
                      onClick={() => toggleCompleted(todo.id)}
                    />  

                    {todoEdit === todo.id ? (
                      <input
                        className="toggle"
                        checked={toggleCompleted}
                        onClick={() => setTodo(todo.id)}
                        onChange={() => editTodo()}
                        placeholder="(Text)"
                        type="text"
                      />
                    ) : (
                      <label htmlFor="todo">{todo.text}</label>
                    )}

                    <button
                      className="destroy"
                      onClick={() => deleteClick(todo.id)}
                    ></button>
                  </div>
                </li>
              ))}
          </ul>

          <Filter
            todos={todos}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </section>
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}
