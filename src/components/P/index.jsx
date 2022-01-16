import { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';

// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext;
  return (
    <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body} {counter}
    </p>
  );
};
