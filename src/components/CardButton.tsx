import LayoutCard from "@/layouts/Card";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  text: string;
  rota: string;
  foto: string;
  para: string;
}
const Card: React.FC<CardProps> = ({ text, rota, foto, para }) => {
  return (
    
      <LayoutCard link={rota} textMensagem={para}>
        <div className="flex justify-center items-center flex-col p-4">
          <div>
            <img className="h-14" src={foto} alt="" />
          </div>
          <div>
            <p id="font-VT323" className="text-6xl text-blue-400 text-center">{text}</p>
          </div>
        </div>
      </LayoutCard>
  );
};
export default Card;