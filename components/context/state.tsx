import { createContext, useContext, useState } from "react";

export type State = {
  counter: number;
  username: string;
  variables: {
    rsi: string; // string format: n,bottom,top
    macd: string; // string format: n,short,long,signal
    volumeZscore: number; // number format: n
    bolingerBands: number; // number format: n,deviation
    priceChangeThreshold: number; // number format: n
    expectedTradeLife: number; // number format: n
    volatilityMargin: number; // number format: n inner candle / candle wick spread
    walkBackLength: number; // number format: n
    linearSmoothness: number; // number format: n
  };
  metrics: {
    avgPriceChange: number;
    priceSmoothness: number;
    avgWalkBackEqualizer: number;
    volumePriceCorrelation: number; // compare high volume with high price change
  };
};

type StateContextType = {
  state: State;
  setPartialState: (partialState: Partial<State>) => void;
};

const defaultState: State = {
  counter: 0,
  username: "Guest",
  variables: {
    rsi: "",
    macd: "",
    volumeZscore: 0,
    bolingerBands: 0,
    priceChangeThreshold: 0,
    expectedTradeLife: 0,
    volatilityMargin: 0,
    walkBackLength: 0,
    linearSmoothness: 0,
  },
  metrics: {
    avgPriceChange: 0,
    priceSmoothness: 0,
    avgWalkBackEqualizer: 0,
    volumePriceCorrelation: 0,
  },
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
