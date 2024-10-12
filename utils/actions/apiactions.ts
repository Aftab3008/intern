"use server";

const options = {
  headers: {
    "x-access-token": process.env.API_KEY!,
  },
};

export async function fetchCoinData() {
  try {
    const [coinsResponse, pricesResponse] = await Promise.all([
      fetch(
        "https://api.coinranking.com/v2/coins?limit=8&orderBy=marketCap&orderDirection=desc",
        options
      ),
      fetch(
        "https://api.coinranking.com/v2/coins?limit=8&orderBy=marketCap&orderDirection=desc",
        options
      ),
    ]);

    if (!coinsResponse.ok || !pricesResponse.ok) {
      console.error("Error fetching data", coinsResponse, pricesResponse);
      return { error: true, message: "Error fetching data" };
    }

    const coinsData = await coinsResponse.json();
    const pricesData = await pricesResponse.json();

    const coins = coinsData.data.coins.map(
      (coin: { name: string; marketCap: string; color: string }) => ({
        name: coin.name,
        marketCap: coin.marketCap,
        color: coin.color,
      })
    );

    const prices = pricesData.data.coins.map(
      (coin: { name: string; price: string; color: string }) => ({
        name: coin.name,
        price: coin.price,
        color: coin.color,
      })
    );

    return { coins, prices };
  } catch (error) {
    console.error("Error fetching data", error);
    return { error: true, message: "Error fetching data" };
  }
}

export async function appleData() {
  try {
    const response = await fetch(
      "http://api.marketstack.com/v1/eod?access_key=5c6121a5dab83c6d4bca178e092d5d38&symbols=AAPL&limit=10"
    );
    const data = await response.json();
    const formattedData = data.data.map(
      (item: { date: string; open: number; close: number }) => ({
        date: item.date,
        open: item.open,
        close: item.close,
      })
    );
    return { data: formattedData };
  } catch (error) {
    return { error: true, message: "Error fetching data" };
  }
}
