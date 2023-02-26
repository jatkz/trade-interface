import { Button, Pane, Text, majorScale, Table } from "evergreen-ui";
import Head from "next/head";
import styles from "@/styles/First.module.css";
import { LightWeightChart } from "@/components/lightweightcharts";

export default function TableOne() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LightWeightChart></LightWeightChart>
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