import React from "react";
import { Pane, TextInputField } from "evergreen-ui";
import { State } from "./context/state";

export type InputGridProps = State["variables"];

export default function InputGrid(props: InputGridProps) {
  return (
    <Pane width={"360px"}>
      <TextInputField
        label="RSI"
        placeholder="format: n,bottom,top"
        value={props.rsi}
      />
      <TextInputField
        label="MACD"
        placeholder="format: n,short,long,signal"
        value={props.macd}
      />
      <TextInputField
        label="Volume Z-Score"
        placeholder="ex: 4, 5.5, 6"
        value={props.volumeZscore}
      />
      <TextInputField
        label="BBands"
        placeholder="format: n,deviation"
        value={props.bolingerBands}
      />
      <TextInputField
        label="Price Change Threshold"
        placeholder="ex: 4, 5.5"
        value={props.priceChangeThreshold}
      />
      <TextInputField
        label="Expected Trade Life"
        placeholder="ex: 4, 5"
        value={props.expectedTradeLife}
      />
      <TextInputField
        label="Volatility Margin"
        placeholder="ex: .1, .89"
        value={props.volatilityMargin}
      />
      <TextInputField
        label="Walk Back Length"
        placeholder="ex: 4, 5"
        value={props.walkBackLength}
      />
      <TextInputField
        label="Linear Smoothness"
        placeholder="ex: .15, .39"
        value={props.linearSmoothness}
      />
    </Pane>
  );
}
