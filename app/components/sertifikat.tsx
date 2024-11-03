"use client";

import { useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type SertifikatProps = {
  photos: Photo[];
};

export default function Sertifikat() {
  const photos: Photo[] = [
    { src: "/images/s1.jpg", alt: "Foto 1", caption: "IT Support Google : 5 Course" },
    { src: "/images/s2.jpg", alt: "Foto 2", caption: "Front-End Course" },
    { src: "/images/s3.jpg", alt: "Foto 3", caption: "Cybersecurity Course" },
    { src: "/images/s4.jpg", alt: "Foto 4", caption: "Lomba Poster Mahasiswa" },
    { src: "/images/s5.jpg", alt: "Foto 5", caption: "Tahfidz Kitab Jurumiyah" }, 
    { src: "/images/s6.jpg", alt: "Foto 6", caption: "Karantina Tahfidz Al-Qur'an" },
  ];

  return (
    <div className="container mx-auto p-2 text-center">
      <div className="text-center pt-20">
        <h2 className="text-2xl font-bold">Sertifikat</h2>
      </div>
      <Piagam photos={photos} />
    </div>
  );
}

function Piagam({ photos }: SertifikatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openModal = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextPhoto = () =>
    setPhotoIndex((photoIndex + 1) % photos.length);

  const prevPhoto = () =>
    setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);

  return (
    <>
      <div className="my-card Sertifikat grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-5">
        {photos.map((photo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover border rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            />
            <p className="mt-3.5 text-base text-center ">{photo.caption}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            ✖
          </button>

          <button className="absolute left-5 text-white text-3xl"
            onClick={prevPhoto}
          >
            ❮
          </button>

          <img src={photos[photoIndex].src} alt={photos[photoIndex].alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />

          <button className="absolute right-5 text-white text-3xl"
            onClick={nextPhoto}
          >
            ❯
          </button>
        </div>
      )}
    </>
  );
}
