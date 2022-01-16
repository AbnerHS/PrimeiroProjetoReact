import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';
describe('<Button />', () => {
  it('should render the button with text "Carregar Mais"', () => {
    const fn = jest.fn();
    render(<Button text="Carregar Mais" handleButton={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Carregar Mais" handleButton={fn} />);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Carregar Mais" disabled={true} handleButton={fn} />);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Carregar Mais" disabled={false} handleButton={fn} />);
    const button = screen.getByRole('button', { name: /carregar mais/i });
    expect(button).toBeEnabled();
  });
});
