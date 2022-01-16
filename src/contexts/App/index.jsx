import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();
// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);
  return <GlobalContext.Provider value={{ contextState, setContextState }}>{children}</GlobalContext.Provider>;
};
