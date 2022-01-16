import './styles.css';
export const Button = ({text, handleButton, disabled}) => (
    <button
        className="button"
        onClick={handleButton}
        disabled={disabled}
        >
        {text}
    </button>
)