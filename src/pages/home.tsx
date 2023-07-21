import "tailwindcss/tailwind.css";
import React from "react";
import CardButton from "@/components/CardButton";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import {botoes} from "@/mock/telaInicial";
import CardFeitos from "@/components/CardRedes";
const home: React.FC = () => {
  return (
    <LayoutPrincipal navBar={true} foto={true}>
      <main className="p-10">
        <section className="flex flex-wrap justify-around" id="botões">
          {botoes.map((botao) => {
            return (
              <CardButton
                key={botao.nome}
                text={botao.nome}
                foto={botao.icon}
                rota={botao.rota}
                para={botao.para}
              />
            );
          })}
        </section>
      </main>
    </LayoutPrincipal>
  );
};
export default home;
