import { netuno } from "@/mock/netuno";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
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
    const [time, setTime] = useState(true);
    useEffect(() => {
        const duration = 100;
        const cont = setTimeout(() => {
            setTime(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);
    const [timeTwo, setTimeTwo] = useState(true);
    useEffect(() => {
        const duration = 200;
        const cont = setTimeout(() => {
            setTimeTwo(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);

    return (
        <div>
            {time ? (<div></div>) : (
                <header className={timeTwo ? "h-0" : "transition-all duration-700 h-20 w-full flex items-center justify-between p-4 bg-fundo-nav rounded-b-lg"}>
                    {timeTwo ? <div></div> :
                        <div className="flex items-center w-full justify-between">
                            <Link href={"/home"}>
                                <div>
                                    <Image src={netuno.netunoIcon} alt={"NETUNO"} className="h-16" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-x-6">
                                {opcoesMenu.map((opcoes) => {
                                    return (
                                        <div key={opcoes.nome}>
                                            <Link href={opcoes.url} className="flex">
                                                <Image src={opcoes.icon} alt={opcoes.nome} className="h-6 mx-2" />
                                                <p className="text-base text-gray-300">
                                                    {opcoes.nome}
                                                </p>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                </header>
            )}
        </div>
    );
};
export default NavBar;
