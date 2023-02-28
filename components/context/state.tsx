import { createContext, useContext, useState } from "react";

type State = {
  counter: number;
  username: string;
};

type StateContextType = {
  state: State;
  setPartialState: (partialState: Partial<State>) => void;
};

const defaultState: State = {
  counter: 0,
  username: "Guest",
};

export const StateContext = createContext<StateContextType>({
  state: defaultState,
  setPartialState: () => null,
});

export const StateProvider = ({ children }: any) => {
  const [state, setState] = useState<State>(defaultState);

  const setPartialState = (partialState: Partial<State>) => {
    setState((prevState) => ({ ...prevState, ...partialState }));
  };

  return (
    <StateContext.Provider value={{ state, setPartialState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);

/**
 *  example usage
 *   const { state, setPartialState } = useGlobalState();
 *
  const handleIncrement = () => {
    setPartialState({ counter: state.counter + 1 });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartialState({ username: event.target.value });
  };

 */
