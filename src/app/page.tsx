import BoxText from "@/components/CardButton";
import Link from "next/link";
import { textos } from "@/mock/textos";
export default function Home() {
  return (
    <Link href={"/home"}>
      <div className="h-screen w-screen flex justify-center items-center">
        <button className="border rounded-xl p-9">APERTE PARA ENTRAR EM MEU SITE</button>
      </div>
    </Link>
  );
}
