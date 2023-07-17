import "tailwindcss/tailwind.css";
import React from "react";
import CardButton from "@/components/CardButton";
import LayoutPrincipal from "@/layouts/PrincipalLayout";

const home: React.FC = () => {
  return (
    <LayoutPrincipal texto="Bem vindo(a)">
      <div className="text-center"></div>

      <main>
        <section className="flex flex-wrap pt-10" id="botões">
          <CardButton
            text={"PERFIL DE JUJU"}
            rota="/perfil"
            foto="https://cdn-icons-png.flaticon.com/512/3106/3106807.png"
          />
          <CardButton
            text={"FEITOS DE JUJU"}
            rota="/feitos"
            foto="https://cdn-icons-png.flaticon.com/512/1986/1986987.png"
          />
          <CardButton
            text={"MUSGAS"}
            foto="https://cdn-icons-png.flaticon.com/512/4430/4430494.png"
            rota="https://open.spotify.com/playlist/534KybD8tRRPDhOpOYiHxd?si=912db728e81c44b1"
          />{" "}
        </section>
      </main>
    </LayoutPrincipal>
  );
};
export default home;
