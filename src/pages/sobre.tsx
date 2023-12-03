import { Maquina } from "@/components/Maquina";
import NavBar from "@/components/NavBar";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import { netuno } from "@/mock/netuno";
import { useEffect, useState } from "react";

const Sobre: React.FC = () => {
    const [time, setTime] = useState(true);

    useEffect(() => {
        const duration = 2000;
        const cont = setTimeout(() => {
            setTime(false); 
        }, duration);
        return () => clearTimeout(cont);
    }, []);

    return (
        <LayoutPrincipal>
            {time ? <div></div> : <NavBar />}
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center">
                    <img
                        src={netuno.fotoRosto}
                        className={time ? 'h-52' : 'py-4 rounded-full transition-all duration-1000 h-32'}
                        id="foto-arredondada"
                        alt={"netuno"}
                    />
                    <div className="text-6xl">
                        <Maquina text="Este é o Júlio" escrever={false} />
                    </div>
                    <div className="text-9xl">
                        FUI ESCOVAR OS DENTES
                    </div>
                </div>
            </div>
        </LayoutPrincipal>
    );
};

export default Sobre;
/*
<div className="flex justify-center p-6">
                <img
                    src={netuno.fotoRosto}
                    className={time ? 'h-52' : 'rounded-full transition-all duration-1000 h-32'}
                    id="foto-arredondada"
                    alt={"netuno"}
                />
            </div>
            <div>
                <div className="flex justify-center">
                    {time ? (
                        <div className="font-bold text-4xl text-white">
                            {timeThree ? <span>BEM VINDO</span> : <Maquina text="BEM VINDO" escrever={false} />}

                        </div>
                    ) : (
                        <div className='font-bold text-4xl text-white miau'>
                            <Maquina text="MEU NOME É NETUNO" escrever={true} />
                        </div>
                    )}
                </div>

                <div className="flex justify-center p-6">
                <img
                    src={netuno.fotoRosto}
                    className={time ? 'h-52' : 'rounded-full transition-all duration-1000 h-32'}
                    id="foto-arredondada"
                    alt={"netuno"}
                />
            </div>
            <div>
                <div className="flex justify-center">
                    {time ? (
                        <div className="font-bold text-4xl text-white">
                            {timeThree ? <span>BEM VINDO</span> : <Maquina text="BEM VINDO" escrever={false} />}

                        </div>
                    ) : (
                        <div className='font-bold text-4xl text-white miau'>
                            <Maquina text="MEU NOME É NETUNO" escrever={true} />
                        </div>
                    )}
                </div>
<div>
                        <img
                            src={netuno.fotoRosto}
                            className={'rounded-full transition-all duration-1000 h-28'}
                            id="foto-arredondada"
                            alt={"netuno"}
                        />
                    </div>
                    <div>
                        <div className="text-6xl">
                        <Maquina text="MEU NOME É NETUNO" escrever={false}/>
                        </div>
                    </div>

<div className="flex items-center">
                    <div>
                        <img
                            src={netuno.fotoRosto}
                            className={'rounded-full transition-all duration-1000 h-28'}
                            id="foto-arredondada"
                            alt={"netuno"}
                        />
                    </div>
                    <div>
                        s
                    </div>
                </div>




*/