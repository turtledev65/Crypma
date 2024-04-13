import { useEffect, useState } from "react";

export default function useCoinInfo(coinSymbol: string, targetSymbol: string = "USDT") {
  const [info, setInfo] = useState({
    currPrice: "",
    priceChangePercent: 0,
    graphData: [],
    symbol: `${coinSymbol}/${targetSymbol}`,
  });

  const symbol = coinSymbol + targetSymbol;
  useEffect(() => {
    const newInfo = { ...info }

    Promise.all([
      fetch(`${API_URL}/avgPrice?symbol=${symbol}`)
        .then(res => res.json())
        .then(res => {
          newInfo.currPrice = Number(res.price).toLocaleString("en-US", { style: "currency", currency: "USD" })
        }),
      fetch(`${API_URL}/ticker/24hr?symbol=${symbol}`)
        .then(res => res.json())
        .then(res => {
          newInfo.priceChangePercent = Number(res.priceChangePercent);
        }),
      fetch(`${API_URL}/klines?symbol=${symbol}&interval=1h&limit=7`)
        .then(res => res.json())
        .then(res => {
          const avgPrices = res.map((item: string[]) => parseInt(item[4]));
          newInfo.graphData = avgPrices
        })
    ]).then(() => setInfo(newInfo));
  }, [])

  return { ...info }
}

const API_URL = "https://api.binance.com/api/v3"
