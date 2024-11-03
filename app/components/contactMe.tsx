"use client";

import React, { useState, Dispatch, SetStateAction } from 'react';
import RatingStars from './ratingStars';
import axios from 'axios';

type ContactFormProps = {
  formContact: { name: string; email: string; message: string };
  setFormContact: Dispatch<SetStateAction<{ name: string; email: string; message: string }>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  newRating: number[];
  setNewRating: Dispatch<SetStateAction<number[]>>;
};

const ContactForm: React.FC<ContactFormProps> = ({
  formContact,
  setFormContact,
  rating,
  setRating,
  newRating,
  setNewRating
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ubahPesan = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormContact({ ...formContact, [name]: value });
  };

  const handleRatingChange = (stars: number) => {
    setRating(stars);
  };

  const submitPesan = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setNewRating((prevRatings) => [...prevRatings, rating]);
    setFormContact({
      name: '',
      email: '',
      message: '',
    });
    handleRatingChange(0); // Reset rating to 0 after submission

    // Optional: Uncomment this to send data to your API
    // try {
    //   const response = await axios.post('/api/handler', { ...formContact, rating });
    //   console.log("Response:", response);
    // } catch (error) {
    //   console.error('Error:', error instanceof Error ? error.message : String(error));
    //   alert('Terjadi kesalahan: ' + (error instanceof Error ? error.message : String(error)));
    //   setIsSubmitted(false);
    // }
  };

  const hapusPesan = () => {
    setFormContact({ name: '', email: '', message: '' });
    setRating(0);
  };

  return (
    <div className="container mx-auto p-2">
      <form onSubmit={submitPesan} className="form">
        <h2 className="text-2xl text-center">Hubungi saya</h2>
        <div className="inputGroup">
          <label className="label">Nama:</label>
          <input
            type="text"
            name="name"
            value={formContact.name}
            onChange={ubahPesan}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formContact.email}
            onChange={ubahPesan}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Pesan:</label>
          <textarea
            name="message"
            value={formContact.message}
            onChange={ubahPesan}
            required
            className="textarea"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Rating:</label>
          <RatingStars onRatingChange={handleRatingChange} />
        </div>
        <div className="buttonGroup">
          <button type="submit" className="button">Submit</button>
          <button type="button" onClick={hapusPesan} className="button">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
