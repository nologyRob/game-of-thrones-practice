import React, { useState, useEffect } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Slider from "../../components/Slider/Slider";
import "./Main.scss";
const Main = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const data = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/random/50"
    );
    const res = await data.json();
    setQuotes(res);
  };

  const quotesToJSX = (quotesArr) => {
    return quotesArr.map((quote, index) => {
      return (
        <div key={index}>
          <QuoteCard
            character={quote.character.name}
            sentence={quote.sentence}
            house={quote.character.house.name}
          />
        </div>
      );
    });
  };

  return (
    <>
      <Slider />
      <div className="main">
        <button onClick={getQuotes}>Click to see Quotes!</button>
        {quotesToJSX(quotes)}
      </div>
    </>
  );
};

export default Main;
