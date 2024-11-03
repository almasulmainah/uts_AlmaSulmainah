import RowRiwayatKerja from "./rowRiwayatKerja";


export default function RiwayatPekerjaan(){
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl font-bold">Riwayat Pekerjaan</h2>
        </div>
        <RowRiwayatKerja
        tahun="2022-2023" 
        instansi="Promedia Teknologi Indonesia" 
        sebagai="Content Writer" />

        <RowRiwayatKerja
        tahun="2023-sekarang" 
        instansi="Media Sosial" 
        sebagai="Content Creator" />

        <RowRiwayatKerja
        tahun="2024" 
        instansi="SDN Margamulya" 
        sebagai="Magang" />
        
      </div>
    );
}