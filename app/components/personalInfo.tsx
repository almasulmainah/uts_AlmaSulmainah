"use client";
import { useState } from "react";

export default function PersonalInfo() {
  const [showInfo, setShowInfo] = useState(false); // State untuk menampilkan info

  const MyInfos = {
    basicInfo: {
      name: "Alma Sulmainah",
      birthDate: "10 November 2003",
      gender: "Male",
    },
    additionalInfo: {
      height: "143 cm",
      weight: "40 kg",
      Status: "Single",
      whatsapp: "0857 5966 8623",
      email: "almasulmainah26@gmail.com",
    },
  };

  return (
    <div className="container mx-auto p-4 text-center item-center justify-center">
      {/* Tombol untuk menampilkan informasi pribadi */}
      <button
        className="bg-yellow-500 text-white py-2 px-6 rounded-[25px] hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-outline-none transition-all"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? "Sembunyikan" : "Personal Info"}
      </button>

      {/* Menampilkan Informasi Dasar dan Tambahan */}
      {showInfo && (
        <ul className="mt-4 text-center space-y-2">
          {/* Informasi Dasar */}
          {Object.entries(MyInfos.basicInfo).map(([key, value]) => (
            <li key={key}>
              <span className="font-bold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              : {value}
            </li>
          ))}

          {/* Informasi Tambahan */}
          {Object.entries(MyInfos.additionalInfo).map(([key, value]) => (
            <li key={key}>
              <span className="font-bold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              : {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
