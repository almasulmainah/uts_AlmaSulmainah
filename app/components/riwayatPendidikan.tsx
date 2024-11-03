import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan(){
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl font-bold">Riwayat Pendidikan</h2>
        </div>
        <RowRiwayat 
        jenjang="SD" 
        sekolah="SD Negeri Cicalobak" 
        tahun="2009 - 2015" />

        <RowRiwayat 
        jenjang="SMP" 
        sekolah="MTs Assobandiyah" 
        tahun="2015 - 2018" />

        <RowRiwayat 
        jenjang="SMA" 
        sekolah="SMA Al-Masyhad BS" 
        tahun="2018 - 2021" />

        <RowRiwayat 
        jenjang="S1" 
        sekolah="Universitas Ma'soem" 
        tahun="2022 - sekarang" />
        
      </div>
    );
}