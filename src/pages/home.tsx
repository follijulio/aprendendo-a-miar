import { perfil } from "../mock/perfil";
import 'tailwindcss/tailwind.css';
import React from "react";
import PerfilCard from "../components/PerfilCard";

const TelaPerfil: React.FC = () => {
  return (
    <div className="h-screen bg-[#0b062d]">
      <div className="p-20">
        <PerfilCard
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
};
export default TelaPerfil;
