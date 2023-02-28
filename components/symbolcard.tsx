import React from "react";
import { Pane } from "evergreen-ui";

export type SymbolCardProps = {
  symbol: string;
  roi: number;
  tags: string[];
  score: number;
};

export default function SymbolCard(props: SymbolCardProps) {
  return (
    <Pane width={"360px"}>
      <Pane display="flex" justifyContent="space-between" alignItems="center">
        <Pane>{props.symbol}</Pane>
        <Pane>+${props.roi}</Pane>
      </Pane>
      <Pane display="flex" justifyContent="space-between" alignItems="center">
        <Pane>{props.tags.join(", ")}</Pane>
        <Pane>Score: {props.score}</Pane>
      </Pane>
    </Pane>
  );
}
