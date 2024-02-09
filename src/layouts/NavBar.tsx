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
                <header className={timeTwo ? "h-0" : "fixed top-0 left-0 right-0 bg transition-all duration-700 h-16 w-full flex items-center justify-between p-4 bg-black rounded-b-lg shadow-lg shadow-slate-900"}>


                    {timeTwo ? <div></div> :
                        <div className="flex items-center w-full justify-between">
                            <Link href={"/home"} className="flex items-center">
                                <div>
                                    <img src={netuno.netunoIcon} alt={"NETUNO"} className="h-16 object-cover" />
                                </div>
                            </Link>
                            <div className="flex items-center gap-x-6">
                                {opcoesMenu.map((opcoes) => {
                                    return (
                                        <div key={opcoes.nome}>
                                            <Link href={opcoes.url} className="flex items-center">
                                                <div className="flex justify-center h-6 w-6 items-center bg-white rounded-full">
                                                    <img src={opcoes.icon} alt={opcoes.nome} className="h-4 mx-2 object-cover" />
                                                </div>
                                                <p className="px-1 text-base font-semibold text-gray-300">
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
