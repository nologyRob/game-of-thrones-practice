import React from 'react'
import "./QuoteCard.scss"

const QuoteCard = (props) => {
  const {character, sentence, house} = props;
  return (
    <div className='quote-card'>
      <h3 className='quote-card__header'>{character}</h3>
      <p className='quote-card__house'>{house}</p>
      <p className='quote-card__sentence'>"{sentence}"</p>
    </div>
  )
}

export default QuoteCard