import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './comp/todos/TodoForm';
import TodoList from './comp/todos/TodoList';
import TodoActions from './comp/todos/TodoActions';

function App() {
    const [currentValue, setValue] = useState([]);

    function setTodoHandler(value) {
        const newTodo = {
            content: value,
            isComplited: false,
            id: uuidv4(),
        };

        setValue([...currentValue, newTodo]);
        console.log(currentValue);
    }

    function deleteTodoHandler(id) {
        setValue(
            currentValue.filter((todo) => {
                return todo.id !== id;
            })
        );
    }

    function clearCompletedHandler() {
        setValue(
            currentValue.filter((todo) => {
                return !todo.isComplited;
            })
        );
    }

    function resetTodoHandler() {
        setValue([]);
    }

    function toglleTodoHandler(id) {
        setValue(
            currentValue.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplited: !todo.isComplited };
                } else {
                    return { ...todo };
                }
            })
        );
    }

    let completedTodos = currentValue.filter((todo) => {
        return todo.isComplited;
    }).length;
    console.log(completedTodos);

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm setTodo={setTodoHandler} />

            {currentValue.length ? (
                <TodoActions
                    clearCompleted={clearCompletedHandler}
                    resetTodo={resetTodoHandler}
                    completed={!!completedTodos}
                />
            ) : (
                <></>
            )}

            <TodoList
                posts={currentValue}
                deleteTodo={deleteTodoHandler}
                toglleTodo={toglleTodoHandler}
            />

            {!!completedTodos && (
                <h2>{`You have complited ${completedTodos} ${
                    completedTodos > 1 ? 'todos' : 'todo'
                } !`}</h2>
            )}
        </div>
    );
}

export default App;
