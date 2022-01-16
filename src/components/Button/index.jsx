import P from 'prop-types';
import './styles.css';
export const Button = ({ text, handleButton, disabled }) => (
  <button className="button" onClick={handleButton} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  handleButton: P.func.isRequired,
  disabled: P.bool,
};
