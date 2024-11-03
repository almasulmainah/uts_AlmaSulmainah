"use client";

import React, { useState, useEffect } from 'react';
import ContactMe from './contactMe';

export default function colorPicker({
  formContact,
setFormContact,
rating,
setRating,
newRating,
setNewRating
} : {
  formContact: any,
setFormContact: any,
rating: any,
setRating: any,
newRating: any,
setNewRating: any
}) {
  const [theme, setTheme] = useState('blue'); // tema utamanya biru

  // Terapkan kelas tema ke <body>
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = (temaBaru: React.SetStateAction<string>) => {
    setTheme(temaBaru);
  };

  return (
    <div className="tema">
      <ContactMe 
      formContact={formContact}
      setFormContact={setFormContact}
      rating={rating}
      setRating={setRating}
      newRating={newRating}
setNewRating={setNewRating}
      />

      {/* Kotak tema di bagian bawah */}
      <div className="theme-picker">
        <div className="color-box light" onClick={() => changeTheme('light')} title="Light"></div>
        <div className="color-box dark" onClick={() => changeTheme('dark')} title="Dark"></div>
        <div className="color-box blue" onClick={() => changeTheme('blue')} title="Blue"></div>
      </div>
    </div>
  );
}
