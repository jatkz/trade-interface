import { UTCTimestamp } from "lightweight-charts";
import { MongoClient, MongoOptions, Filter, Document, WithId } from "mongodb";

if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

const uri = process.env.MONGO_URI;
const options: Partial<MongoOptions> = {
  maxPoolSize: 10,
  minPoolSize: 3,
  maxIdleTimeMS: 15000,
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

export type CandleStick = {
  datetime: number; // Unix timestamp in milliseconds
  open: number; // Open price
  high: number; // High price
  low: number; // Low price
  close: number; // Close price
  volume: number; // Volume
  /** calculated fields, could be a task to move to more efficient backend layer */
  time: UTCTimestamp; // Unix timestamp in seconds
};

export type SymbolCandles = {
  symbol: string;
  candles: CandleStick[];
  meanVolume: number;
  stdVolume: number;
};

export enum CollectionNames {
  short = "Short",
  medium = "Medium",
}

export const fetchSymbolCandles = async (
  collectionName: CollectionNames,
  filter: Filter<Document>
) => {
  try {
    const client = await clientPromise;
    const db = client.db("tdameritrade");

    const symbolset = await db
      .collection<SymbolCandles>(collectionName)
      .findOne(filter);

    if (!symbolset) {
      throw "No symbolset found";
    }

    symbolset.candles = symbolset.candles.map((candle) => {
      return {
        ...candle,
        time: (candle.datetime / 1000) as any,
      };
    });

    return JSON.parse(JSON.stringify(symbolset));
  } catch (e) {
    console.error(e);
  }
};
