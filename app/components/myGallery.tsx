"use client";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type MyHobiProps = {
  photos: Photo[];
};

export default function Hobi() {
  const photos: Photo[] = [
    { src: "/images/p1.jpg", alt: "Foto 1", caption: "Editing" },
    { src: "/images/p2.jpg", alt: "Foto 2", caption: "Reading" },
    { src: "/images/p3.jpg", alt: "Foto 3", caption: "Badminton" },
    { src: "/images/p4.jpg", alt: "Foto 4", caption: "Watching K-Drama" },
  ];

  return (
    <div className="container mx-auto p-2 text-center">
      <div className="text-center pt-20">
        <h2 className="text-2xl font-bold">My Hobbies</h2>
      </div>

      <MyHobi photos={photos} />
    </div>
  );
}

function MyHobi({ photos }: MyHobiProps) {
  return (
    <div className="my-card hobi my-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5">
      {photos.map((photo: Photo, index: number) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-80 object-cover border rounded-lg shadow-lg" 
          />
          <p className="mt-3.5 text-base text-center">{photo.caption}</p> {/* Keterangan di bawah foto */}
        </div>
      ))}
    </div>
  );
}
