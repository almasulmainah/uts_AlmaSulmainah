"use client"
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Header from "./components/header";
import RiwayatKerja from "./components/riwayatKerja";
import ColorPicker from "./components/colorPicker";
import "./alma.css";
import MySkill from "./components/mySkill";
import Hobi from "./components/myGallery";
import PersonalInfo from "./components/personalInfo";
import Sertifikat from "./components/sertifikat";
import AverageRating from "./components/averageRating";
import React, { useState } from 'react';


export default function Gallery() {

  const [formContact, setFormContact] = useState<any>({
    name: '',
    email: '',
    message: '',
  });
  const [rating, setRating] = useState<number>(0);

  const [newRating,setNewRating] = useState<any>([]);  // dek
  return (
    <section>
      <Header />
      <AverageRating
      formContact={formContact}
      setFormContact={setFormContact}
      rating={rating}
      setRating={setRating}
      newRating={newRating}
setNewRating={setNewRating}
      />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatKerja />
      <MySkill />
      <Hobi />
      <Sertifikat/>
      <ColorPicker 
      formContact={formContact}
      setFormContact={setFormContact}
      rating={rating}
      setRating={setRating}
      newRating={newRating}
setNewRating={setNewRating}
      />
    </section>
  );
}
