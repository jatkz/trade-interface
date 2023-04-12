import { SymbolCandles, CandleStick } from "@/lib/mongodb";
import { Pane } from "evergreen-ui";
import {
  createChart,
  ColorType,
  HistogramSeriesPartialOptions,
  SeriesMarkerPosition,
  SeriesMarkerShape,
  Time,
  SeriesMarker,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ChartComponent = (props: {
  candlesData: CandleStick[];
  markers?: SeriesMarker<Time>[];
  colors: { backgroundColor: string; textColor: string };
}) => {
  const {
    candlesData,
    markers,
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
    candlestickSeries.setData(candlesData);

    if (markers) candlestickSeries.setMarkers(markers);

    {
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
        candlesData.map((candle) => ({
          time: candle.time,
          value: candle.volume,
          color: candle.close > candle.open ? "#26a69a" : "#ef5350",
        }))
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [candlesData, markers, backgroundColor, textColor]);

  return <Pane ref={chartContainerRef} />;
};

export function LightWeightChart(props: any) {
  return <ChartComponent {...props}></ChartComponent>;
}

export const newSeriesMarker = (config: {
  candle: CandleStick;
  text: string;
  position: SeriesMarkerPosition;
  shape: SeriesMarkerShape;
  color: string;
}): SeriesMarker<Time> => {
  return {
    time: config.candle.time,
    position: config.position,
    shape: config.shape,
    color: config.color,
    text: config.text,
  };
};

/**
 * example:
 * 
 *     const markers = (
      [
        candlesData[10],
        candlesData[20],
        candlesData[30],
        candlesData[40],
      ] as CandleStick[]
    ).map((candle) => {
      return {
        time: candle.time,
        position: "aboveBar" as SeriesMarkerPosition,
        color: "#ef5350",
        shape: "arrowUp" as SeriesMarkerShape,
        text: "A @ " + candle.high,
      } as any;
    });
 */
