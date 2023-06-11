import Perfil from "@/components/PerfilCard";
import { perfil } from "@/mock/perfil";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen bg-[#0b062d]">
      <div className="p-20">
        <Perfil
          nickName={perfil.nickName}
          nome={perfil.nome}
          imageLink={perfil.foto}
          idade={perfil.idade}
          bio={perfil.bio}
          link={perfil.link}
        />
      </div>
    </div>
  );
}
/*
 */
