// StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill().map((_, i) => <span key={i}>&#9733;</span>)}
      {halfStar && <span>&#9733;</span>}
      {Array(emptyStars).fill().map((_, i) => <span key={i + fullStars + 1}>&#9734;</span>)}
    </div>
  );
};

export default StarRating;
