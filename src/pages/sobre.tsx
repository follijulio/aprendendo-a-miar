import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
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

    const [timeTwo, setTimeTwo] = useState(true);
    useEffect(() => {
        const duration = 2750;
        const cont = setTimeout(() => {
            setTimeTwo(false);
        }, duration);
        return () => clearTimeout(cont);


    }, []);
    return (
        <LayoutPrincipal>
            {time ? <div></div> : <NavBar />}
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center">
                    {timeTwo ?
                        <img
                            src={netuno.fotoRosto}
                            className={time ? 'h-52 opacity-100' : 'py-4 rounded-full transition-all duration-1000 h-32 opacity-0'}
                            id="foto-arredondada"
                            alt={"netuno"}
                        />
                        :
                        <>
                        </>
                    }
                    <div className="text-6xl">
                        <Maquina text="Este é o Júlio" escrever={false} />
                    </div>
                    {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className={timeTwo ? 'opacity-0' : 'transition-opacity duration-1000 opacity-100'}>
                        <div className="flex justify-center items-center h-full">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <CardImage rosto={true} imageLink="https://github.com/follijulio.png" texto="Olá! Sou Júlio César, um apaixonado por tecnologia e programação nascido em Alagoas em 2006. Desde cedo, meu fascínio por códigos e sites me levou a explorar o vasto mundo da programação." />
                                    <div>
                                        <Card texto="Atualmente, estudo no Instituto Federal de Alagoas (IFAL), onde curso Informática. Iniciei minha jornada aos 14 anos, inspirado por vídeos online que despertaram minha paixão pela criação de sites e códigos. Dedico cerca de 8 horas diárias ao estudo e aprimoramento nessa área fascinante." />
                                        <Card texto="Dedico meu tempo ao estudo e ao desenvolvimento constante. Com a bagagem do IFAL, busco explorar novos horizontes na área da informática. Cada linha de código é uma oportunidade de aprendizado, e estou ansioso para contribuir ainda mais para a comunidade tecnológica no futuro." />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <Card texto="Meus valores são simples, mas fundamentais para minha jornada. Acredito na honestidade, perseverança, alegria e calma como pilares essenciais para alcançar meus objetivos. Esses princípios orientam minha conduta tanto na vida quanto na programação." />
                                        <a href="https://www2.ifal.edu.br">
                                        <Card texto="INSTUTUTO FEDERAL DE ALAGOAS"/>
                                        </a>
                                    </div>
                                    <CardImage imageLink="https://www.amsterdam.net/en/wp-content/uploads/sites/136/johan-cruijff-arena-hd.jpg" texto="Meus sonhos vão além do código. Um deles é viajar para os Países Baixos e visitar a Johan Cruyff Arena, o estádio do AJAX. Cruyff, meu maior ídolo, deixou um legado inspirador no futebol, e esse estádio representa um marco significativo em sua carreira." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPrincipal>
    );
};

export default Sobre;