import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
  <input className="text-input" type="search" onChange={handleChange} value={searchValue} placeholder="Pesquisar" />
);

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
