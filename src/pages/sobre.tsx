import CardChildren from "@/components/CardChildren";
import CardImage from "@/components/CardImage";
import LayoutHome from "@/layouts/LayoutHome";
import { useEffect, useState } from "react";

const Sobre: React.FC = () => {

    const [time, resetTime] = useTime({ duration: 2000 });
    const [timeTwo, resetTimeTwo] = useTime({ duration: 2750 });

    return (
        <LayoutHome durationNav={2000} NavBarActive={true} tempo={1} texto_antes={"UM POUCO SOBRE"} texto_depois={"JÚLIO "} fotoInicial={false}>
            <div className={timeTwo ? 'opacity-0' : 'transition-opacity duration-1000 opacity-100'}>
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-wrap lg:flex-col">
                        <div className="lg:flex">
                            <CardImage rosto={true} imageLink="https://github.com/follijulio.png" texto="Olá! Sou Júlio César, um apaixonado por tecnologia e programação nascido em Alagoas. Desde cedo, meu fascínio por códigos e sites me levou a explorar o vasto mundo da programação." />
                            <div>
                                <CardChildren>
                                    Atualmente, estudo no <a href="https://www2.ifal.edu.br" className="underline decoration-dotted">Instituto Federal de Alagoas (IFAL)</a>, onde curso Informática. Iniciei minha jornada aos 14 anos, inspirado por vídeos online que despertaram minha paixão pela criação de sites e códigos. Dedico cerca de 8 horas diárias ao estudo e aprimoramento nessa área fascinante.
                                </CardChildren>
                                <CardChildren>
                                    Dedico meu tempo ao estudo e ao desenvolvimento constante. Com a bagagem do <a href="https://www2.ifal.edu.br" className="underline decoration-dotted">IFAL</a>, busco explorar novos horizontes na área da informática. Cada linha de código é uma oportunidade de aprendizado, e estou ansioso para contribuir ainda mais para a comunidade tecnológica no futuro.
                                </CardChildren>
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div>
                                <CardChildren>
                                    Meus valores são simples, mas fundamentais para minha jornada. Acredito na honestidade, perseverança, alegria e calma como pilares essenciais para alcançar meus objetivos. Esses princípios orientam minha conduta tanto na vida quanto na programação
                                </CardChildren>
                                <CardChildren>
                                    Meus valores são simples, mas fundamentais para minha jornada. Acredito na honestidade, perseverança, alegria e calma como pilares essenciais para alcançar meus objetivos. Esses princípios orientam minha conduta tanto na vida quanto na programação
                                </CardChildren>
                            </div>
                            <CardImage imageLink="https://www.amsterdam.net/en/wp-content/uploads/sites/136/johan-cruijff-arena-hd.jpg" texto="Meus sonhos vão além do código. Um deles é viajar para os Países Baixos e visitar a Johan Cruyff Arena, o estádio do AJAX. Cruyff, meu maior ídolo, deixou um legado inspirador no futebol, e esse estádio representa um marco significativo em sua carreira." />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutHome>
    );
};

export default Sobre;
