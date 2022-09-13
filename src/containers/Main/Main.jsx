import React, { useState, useEffect } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Slider from "../../components/Slider/Slider";
import "./Main.scss";

const Main = (props) => {
  const { searchTerm } = props;
  const [value, setValue] = useState(50);
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const data = await fetch(
      `https://api.gameofthronesquotes.xyz/v1/random/${value}`
    );
    const res = await data.json();
    setQuotes(res);
  };

  useEffect(() => {
    getQuotes();
  }, [value]);

  const filterQuotes = (quotesArr, searchTerm) => {
    return quotesArr.filter((quote) =>
      quote.character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const quotesToJSX = (quotesArr) => {
    return filterQuotes(quotesArr, searchTerm).map((quote, index) => {
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

  const getSliderValue = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="main">
      <div className="main__slider">
        <Slider getSliderValue={getSliderValue} />
      </div>
      <h2>Showing {value} quotes:</h2>
      <div className="main__quotes">{quotesToJSX(quotes)}</div>
    </div>
  );
};

export default Main;
