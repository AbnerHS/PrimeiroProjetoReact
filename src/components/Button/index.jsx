import './styles.css';
export const Button = ({text, handleButton}) => (
    <button
        className="button"
        onClick={handleButton}
        >
        {text}
    </button>
)