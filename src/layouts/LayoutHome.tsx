import { Children, useEffect, useState } from "react";
import LayoutPrincipal from "./PrincipalLayout";
import NavBar from "@/components/NavBar";
import { Maquina } from "@/components/Maquina";
import { netuno } from "@/mock/netuno";
import { textos } from "@/mock/textos";
import CardText from "@/components/CardText";
import Image from "next/image";
interface layoutHomeProps {
    children: React.ReactNode;
    durationNav: number;
}

const LayoutHome: React.FC<layoutHomeProps> = ({ children , durationNav }) => {


    const [time, setTime] = useState(true);
    useEffect(() => {
        const duration = 2000;
        const cont = setTimeout(() => {
            setTime(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);

    const [timeTwo, setTimeTwo] = useState(true);
    useEffect(() => {
        const duration = 5700;
        const cont = setTimeout(() => {
            setTimeTwo(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);
    const [timeThree, setTimeThree] = useState(true);
    useEffect(() => {
        const duration = 900;
        const cont = setTimeout(() => {
            setTimeThree(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);
    const [timeFour, setTimeFour] = useState(true);
    useEffect(() => {
        const duration = durationNav;
        const cont = setTimeout(() => {
            setTimeFour(false);
        }, duration);
        return () => clearTimeout(cont);
    }, []);

    const [showMain, setShowMain] = useState(false);
    useEffect(() => {
        const mainTransitionDelay = 6500;
        const mainTransitionTimeout = setTimeout(() => {
            setShowMain(true);
        }, mainTransitionDelay);


        return () => {
            clearTimeout(mainTransitionTimeout);
            setShowMain(false);
        };
    }, []);



    return (
        <LayoutPrincipal>
            <nav>
                {timeFour ? <div></div> : <NavBar />}
            </nav>
            <div className="flex justify-center p-6">
                <img
                    src={netuno.fotoRosto}
                    className={time ? 'h-52' : 'rounded-full transition-all duration-1000 h-32 object-cover'}
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
                {timeTwo ? (
                    <div>{ }</div>
                ) : (
                    <main className={showMain ? 'transition-opacity duration-1000 opacity-100' : 'opacity-0'}>
                        <section id="cards">
                            <div className="gap-y-6 gap-x-6 flex flex-wrap justify-evenly">
                                {textos.map((text) => {
                                    return (
                                        <CardText key={text.titulo} text={text.text} link={text.link} />
                                    )
                                })}

                            </div>
                        </section>
                        <div>
                            {children}
                        </div>
                    </main>
                )}
            </div>
        </LayoutPrincipal>
    );
};
export default LayoutHome;