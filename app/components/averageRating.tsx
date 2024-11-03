"use client";

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';

type AverageRatingProps = {
  formContact: { name: string; email: string; message: string };
  setFormContact: Dispatch<SetStateAction<{ name: string; email: string; message: string }>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  newRating: number[];  // Anggap `newRating` sebagai array angka
  setNewRating: Dispatch<SetStateAction<number[]>>;
};

const AverageRating: React.FC<AverageRatingProps> = ({
  formContact,
  setFormContact,
  rating,
  setRating,
  newRating,
  setNewRating,
}) => {
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const calculateAverageRating = () => {
      if (newRating.length === 0) return 0;
      const total = newRating.reduce((sum, rating) => sum + rating, 0);
      return total / newRating.length;
    };

    setAverageRating(calculateAverageRating());
  }, [newRating]);

  return <div className="text-center text-base font-semibold mt-5">Average Rating: {averageRating.toFixed(1)} / 5</div>;
};

export default AverageRating;
