import React from 'react'
import "./card.styles.scss"

export const Card = ({ content: { title, imageUrl }}) => {
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}
