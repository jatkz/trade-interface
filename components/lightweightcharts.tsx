import { SymbolCandles, CandleStick } from "@/lib/mongodb";
import {
  createChart,
  ColorType,
  HistogramSeriesPartialOptions,
  SeriesMarkerPosition,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ChartComponent = (props: any) => {
  const {
    data,
    candlesData,
    colors: { backgroundColor = "#131722", textColor = "#d1d4dc" } = {},
  } = props;

  const chartContainerRef = useRef<any>();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });
    chart.timeScale().fitContent();

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
    candlestickSeries.setData(
      (candlesData as CandleStick[]).map((candle) => ({
        time: (candle.datetime / 1000) as any,
        ...candle,
      }))
    );

    const markers = (
      [
        candlesData[10],
        candlesData[20],
        candlesData[30],
        candlesData[40],
      ] as CandleStick[]
    ).map((candle) => {
      return {
        time: (candle.datetime / 1000) as any,
        position: "aboveBar" as SeriesMarkerPosition,
        color: "#ef5350",
        shape: "arrowUp",
        text: "A @ " + candle.high,
      } as any;
    });
    candlestickSeries.setMarkers(markers);

    var volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    });
    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.75, // highest point of the series will be 70% away from the top
        bottom: 0,
      },
    });
    volumeSeries.setData(
      (candlesData as CandleStick[]).map((candle) => ({
        time: (candle.datetime / 1000) as any,
        value: candle.volume,
        color: candle.close > candle.open ? "#26a69a" : "#ef5350",
      }))
    );

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data, candlesData, backgroundColor, textColor]);

  return <div ref={chartContainerRef} />;
};

export function LightWeightChart(props: any) {
  return <ChartComponent {...props}></ChartComponent>;
}
