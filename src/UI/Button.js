import './Button.module.css';

function Button(props) {
    const { children, disabled = false } = props;
    return (
        <button {...props} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
