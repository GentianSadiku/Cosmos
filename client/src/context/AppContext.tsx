import React, { createContext, useReducer, Dispatch } from "react";
import { stateReducer, stateActions } from "./reducers";

type InitialStateType = {
  connectWalletModal: boolean;
};

const initialState = {
  connectWalletModal: false,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<stateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
