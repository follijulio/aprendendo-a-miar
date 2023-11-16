import { netuno } from "@/mock/netuno";
import Link from "next/link";
const opcoesMenu = [
    {
        nome: "Sobre",
        url: "/sobre",
        icon: "https://cdn-icons-png.flaticon.com/512/4210/4210462.png"
    },
    {
        nome: "Projetos",
        url: "/projetos",
        icon: "https://cdn-icons-png.flaticon.com/512/1087/1087902.png"
    },
    {
        nome: "Contatos",
        url: "/contatos",
        icon: "https://icons.veryicon.com/png/o/object/material_design/contacts-63.png"
    },
]
const NavBar: React.FC = () => {
    return (
        <header className="h-20 w-full flex items-center justify-between p-4 bg-fundo-nav rounded-b-lg">
            <Link href={"/home"}> 
                <div>
                    <img src={netuno.netunoIcon} alt={"NETUNO"} className="h-16" />
                </div>
            </Link>
            <div className="flex items-center gap-x-6">
                {opcoesMenu.map((opcoes) => {
                    return (
                        <div key={opcoes.nome}>
                            <Link href={opcoes.url} className="flex">
                                <img src={opcoes.icon} alt={opcoes.nome} className="h-6 mx-2" />
                                <p className="text-base text-gray-300">
                                    {opcoes.nome}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </header>
    );
};
export default NavBar;
/*
sobre


projetos
https://cdn-icons-png.flaticon.com/512/1087/1087902.png

contato

*/