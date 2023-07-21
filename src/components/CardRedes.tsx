import Link from "next/link";
import { useState } from "react";
import LayoutCard from "../layouts/Card";
interface FeitosProps {
    icon: string;
    text: string;
    link: string;
    para: string;
}
const CardFeitos: React.FC<FeitosProps> = ({ icon, text, link, para }) => {

    return (
        <LayoutCard link={link} textMensagem={para}>
            <img className="h-20 -translate-x-6 -translate-y-6 rounded-3xl object-cover bg-[#1a0368]" src={icon} alt="" />
            <div className="flex-col">
                <p id="font-VT323" className="text-5xl text-center text-blue-400 font-bold">
                    {text}
                </p>
                <div className="flex justify-center items-center"> </div>
            </div>
        </LayoutCard>
    );
};
export default CardFeitos;
/*
// SeuComponente.tsx (ou .jsx, dependendo do arquivo de extensão)

import React from 'react';

const SeuComponente: React.FC = () => {
  return (
    <div className="w-64 h-64 bg-gray-200 p-4 relative">
      <img
        src="/caminho/para/sua/imagem.jpg"
        alt="Descrição da imagem"
        className="w-full h-full object-cover fade-out"
      />
    </div>
  );
};

export default SeuComponente;

*/