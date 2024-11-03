// components/RatingStars.jsx
import React, { useState } from 'react';

type RatingStarsProps = {
  onRatingChange: (rating: number) => void; // Tentukan tipe fungsi onRatingChange
};

const RatingStars: React.FC<RatingStarsProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState<number>(0); // Tentukan tipe number untuk rating

  const handleStarClick = (star: number) => { // Tentukan tipe number untuk star
    setRating(star);
    onRatingChange(star); // Kirim nilai rating ke komponen induk
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer', color: star <= rating ? '#FFD700' : '#CCC' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
