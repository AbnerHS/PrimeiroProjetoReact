import { useContext, useRef } from 'react';
import { Context } from '../../contexts/AppReducer';

export const H2 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} />
      <h2 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h2>
    </>
  );
};
