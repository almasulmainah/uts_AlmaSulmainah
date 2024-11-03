import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function RowRiwayatKerja(props: { tahun: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; instansi: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; sebagai: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) {
    return(
        <div className="border-2 border-yellow-900/75 rounded-lg bg-yellow-500 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3 p-2">{props.tahun}</div>
          <div className="col-span-12 md:col-span-6 p-2">{props.instansi}</div>
          <div className="col-span-12 md:col-span-3 p-2">{props.sebagai}</div>
        </div>
      </div>
    </div>
    );
}