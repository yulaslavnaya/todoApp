import { useState } from 'react';
import Button from '../../UI/Button';

function TodoForm({ setTodo }) {
    const [text, setText] = useState('');

    function handleSub(e) {
        e.preventDefault();
        setTodo(e.target.todo.value);
        setText('');
    }

    return (
        <form onSubmit={handleSub}>
            <input
                type="text"
                name="todo"
                placeholder="Enter new todo"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            ></input>
            <Button type="submit" title="submit">
                Submit
            </Button>
        </form>
    );
}

export default TodoForm;
