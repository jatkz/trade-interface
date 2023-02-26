import { Filter, Document, WithId } from "mongodb";
import clientPromise from "./mongodb";

export type CandleStick = {
  datetime: number; // Unix timestamp in milliseconds
  open: number; // Open price
  high: number; // High price
  low: number; // Low price
  close: number; // Close price
  volume: number; // Volume
};

export type SymbolCandles = {
  symbol: string;
  candles: CandleStick[];
  meanVolume: number;
  stdVolume: number;
};

export enum CollectionNames {
  short = "short",
  medium = "medium",
}

export const fetchSymbolCandles = async (
  collectionName: CollectionNames,
  filter: Filter<Document>
) => {
  try {
    const client = await clientPromise;
    const db = client.db("tdameritrade");

    const symbolset = await db.collection(collectionName).findOne(filter);

    if (!symbolset) {
      throw "No symbolset found";
    }

    return JSON.parse(JSON.stringify(symbolset)) as WithId<SymbolCandles>;
  } catch (e) {
    console.error(e);
  }
};
