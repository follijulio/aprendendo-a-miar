import "tailwindcss/tailwind.css";
import React from "react";
import CardButton from "@/components/CardButton";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import {botoes} from "@/mock/telaInicial";
const home: React.FC = () => {
  return (
    <LayoutPrincipal texto="BEM VINDO">
      <div className="text-center"></div>
      <main>
        <section className="flex flex-wrap pt-10" id="botões">
          {botoes.map((botao) => {
            return (
              <CardButton
                key={botao.nome}
                text={botao.nome}
                foto={botao.icon}
                rota={botao.rota}
              />
            );
          })}
        </section>
      </main>
    </LayoutPrincipal>
  );
};
export default home;
