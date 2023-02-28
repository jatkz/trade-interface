import {
  Pane,
  majorScale,
  Card,
  IconButton,
  CogIcon,
  TrashIcon,
  TickIcon,
} from "evergreen-ui";
import Head from "next/head";
import styles from "@/styles/Terminal.module.css";
import { LightWeightChart } from "@/components/lightweightcharts";
import { GetServerSideProps } from "next";
import {
  SymbolCandles,
  fetchSymbolCandles,
  CollectionNames,
} from "@/lib/mongodb";
import { useContext } from "react";
import { StateContext, useGlobalState } from "@/components/context/state";

interface Props {
  isConnected: boolean;
  medium?: SymbolCandles;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
}) => {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=59"
    );

    const mediumResponse = await fetchSymbolCandles(CollectionNames.medium, {
      symbol: "TSLA",
    });
    if (!mediumResponse) {
      throw "error in fetchTopMedium";
    }
    // todo transform data
    return {
      props: {
        isConnected: true,
        medium: mediumResponse,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function TableOne({ isConnected, medium }: Props) {
  const { state, setState } = useGlobalState();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Pane className={styles.gridcontainer}>
          <Card
            border="0.125rem solid"
            borderColor="black"
            background="tint1"
            padding={majorScale(2)}
            className={styles.max}
          >
            <Pane display="flex" alignItems="center">
              <Pane width={"100%"} className={styles.gridcontainer}>
                <Pane
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Pane>TSLA</Pane>
                  <Pane>+$556</Pane>
                </Pane>
                <Pane
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Pane># 6sigma, easy, wide</Pane>
                  <Pane>Score: 656</Pane>
                </Pane>
              </Pane>
            </Pane>
          </Card>
          <Card
            border="0.125rem solid"
            borderColor="black"
            background="tint1"
            padding={majorScale(1)}
            marginX="auto"
            alignItems="center"
          >
            {medium && (
              <LightWeightChart candlesData={medium.candles}></LightWeightChart>
            )}
          </Card>
          <Pane>
            <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
              <IconButton icon={CogIcon} marginRight={majorScale(2)} />
              <IconButton
                icon={TrashIcon}
                intent="danger"
                marginRight={majorScale(2)}
              />
              <IconButton icon={TickIcon} intent="success" />
            </Pane>
          </Pane>
        </Pane>
      </main>
    </>
  );
}

/**
 * Example: groupIntoN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 * @param array
 * @param n
 * @returns
 */
function groupIntoN<T>(array: T[], n: number) {
  const result = [];

  for (let i = 0; i < array.length; i += 5) {
    result.push(array.slice(i, i + n));
  }

  return result;
}
