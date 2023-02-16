import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/Trade.module.css'
import Container from '@/components/container'

const totals = {
  netProfit: 105,
  roi: 155,
  winrate: 66,
  avgTrade: 3,
  avgWin: 9,
  avgLoss: 0,
};

export default function Home() {

  const { netProfit, roi, winrate, avgTrade, avgWin, avgLoss } = totals;
  return (
    <>
      <Head>
        <title>Trade Alchemy App</title>
        <meta
          name="description"
          content="Calculate numbers with candle sticks and invent new trade strategies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className={styles.container}>
        <div className={styles.column}>
          <div>Buy/Sell Alert</div>
          <div>Calculation Inputs</div>
          <div>Realtime Chart</div>
        </div>
        <div className={styles.column}>
          <Container>
              <div>
                <div >
                  <span>
                  TSLA
                    </span>
                  <Image 
                    priority
                    src="/images/tsla.png"
                    className={styles.borderCircle}
                    height={50}
                    width={50}
                    alt="Tesla"
                  />
                </div>
                <div>$105 estimated $56 realtime</div>
                <div>#3sigma_margins, bullish</div>
                <div>Score: 565</div>
              </div>
          </Container>
        <div>Chart</div>
        <div>Indicators</div>
        <div>Strategy ROIS</div>
        <div>
          <p>
          TOTAL : NET PROFIT {netProfit} : ROI {roi} : WIN RATE {winrate} : AVG TRADE {avgTrade} : AVG WIN {avgWin} : AVG LOSS {avgLoss}
          </p>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
