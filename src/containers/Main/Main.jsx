import React, { useState, useEffect } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Slider from "../../components/Slider/Slider";
import "./Main.scss";

const Main = (props) => {
  const { searchTerm } = props;
  const [value, setValue] = useState(50);
  const [quotes, setQuotes] = useState([]);
  const [character, setCharacter] = useState("random")

  const getQuotes = async () => {
    const data = await fetch(
      `https://api.gameofthronesquotes.xyz/v1/${character}/${value}`
    );
    const res = await data.json();
    setQuotes(res);
  };

  useEffect(() => {
    getQuotes();
  }, [value]);

  const filterQuotes = (quotesArr, searchTerm) =>{
    return quotesArr.filter((quote)=> quote.character.name.includes(searchTerm))
  }

  const quotesToJSX = (quotesArr) => {
    const filteredQuotes = filterQuotes(quotesArr, searchTerm)
    return filteredQuotes.map((quote, index) => {
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
  }

  return (
    <div className="main">
      <div className="main__slider">
        <Slider setValue={setValue} />
      </div>
      <h2>Showing {value} quotes:</h2>
      <div className="main__quotes">{quotesToJSX(quotes)}</div>
    </div>
  );
};

export default Main;
