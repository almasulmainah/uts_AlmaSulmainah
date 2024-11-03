import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("kirim pesan",req.body);
    const { name, email, message, rating } = req.body;

    // Validasi data
    if (!name || !email || !message || typeof rating !== 'number') {
      return res.status(400).json({ message: 'Data tidak valid' });
    }

    // Logika penyimpanan data atau proses lainnya
    console.log('Data yang diterima:', { name, email, message, rating });

    // Mengirim respons sukses dalam format JSON
    return res.status(200).json({ message: 'Rating berhasil disimpan' });
  } else {
    // Menangani method selain POST
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} tidak diizinkan` });
  }
}
