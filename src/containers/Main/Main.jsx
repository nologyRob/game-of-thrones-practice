import React, { useState, useEffect } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Slider from "../../components/Slider/Slider";
import "./Main.scss";
const Main = () => {
  const [value, setValue] = useState(50);
  const [quotes, setQuotes] = useState([]);
  const [link, setLink] = useState(
    `https://api.gameofthronesquotes.xyz/v1/random/50`
  );

  const getQuotes = async () => {
    const data = await fetch(link);
    const res = await data.json();
    setQuotes(res);
  };

  useEffect(() => {
    getQuotes();
  }, [value]);

  const quotesJSX = quotes.map((quote, index) => {
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

  return (
    <div className="main">
      <div className="main__slider">
        <Slider setLink={setLink} setValue={setValue} />
      </div>
      <h2>Showing {value} quotes:</h2>
      <div className="main__quotes">
      {quotesJSX}
      </div>
    </div>
  );
};

export default Main;
