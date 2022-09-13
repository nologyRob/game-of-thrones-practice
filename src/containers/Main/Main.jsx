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

  
  
  const quotesJSX = quotes.map((quote, index) => {
    return (
      <div key={index}>
        <QuoteCard character={quote.character.name} sentence={quote.sentence} house={quote.character.house.name}/>
      </div>
    );
  });

  return (
    <>
      <Slider setLink={setLink} />
      <div className="main"><button onClick={getQuotes}>Click to see Quotes!</button>{quotesJSX}</div>
      
    </>
  );
};

export default Main;
