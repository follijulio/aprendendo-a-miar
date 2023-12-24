import { useEffect, useState } from "react";
import LayoutPrincipal from "./PrincipalLayout";
import { Maquina } from "@/components/Maquina";
import { netuno } from "@/mock/netuno";
import useTime from "@/hooks/UseTime";
import NavBar from "./NavBar";


interface layoutHomeProps {
    children: React.ReactNode;
    durationNav: number;
    NavBarActive: boolean;
    tempo: number;
    texto_antes: string;
    texto_depois: string;
    fotoInicial: boolean;
}

const LayoutHome: React.FC<layoutHomeProps> = ({ fotoInicial, children, durationNav, NavBarActive, tempo, texto_antes, texto_depois }) => {
    const mainTransitionDelay = tempo;
    const scale = mainTransitionDelay / 6500;
    const [time, resetTime] = useTime({ duration: 2000 * scale });
    const [timeTwo, resetTimeTwo] = useTime({ duration: 5700 * scale });
    const [timeThree, resetTimeThree] = useTime({ duration: 900 * scale });
    const [timeFour, resetTimeFour] = useTime({ duration: durationNav * scale });

    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
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
            {NavBarActive ?
                <nav>
                    {timeFour ? <div></div> : <NavBar />}
                </nav>
                :
                <div>
                    
                </div>
            }
            {
                fotoInicial ?
                    <div>
                        <div className="flex justify-center p-6">
                            <img
                                src={netuno.fotoRosto}
                                className={time ? 'h-52 image-move-efect' : 'rounded-full transition-all duration-1000 h-32 object-cover image-move-efect'}
                                alt={"netuno"}
                            />
                        </div>
                        <div>
                            <div className="flex justify-center">
                                {time ? (
                                    <div className="font-bold text-4xl text-white">
                                        {timeThree ? <span>{texto_antes}</span> : <Maquina text={texto_antes} escrever={false} scale={scale} />}
                                    </div>
                                ) : (
                                    <div className='font-bold text-4xl text-white miau'>
                                        <Maquina text={texto_depois} escrever={true} scale={scale} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    :
                    <>
                    </>
            }
            {timeTwo ? (
                <div>{ }</div>
            ) : (
                <main className={showMain ? 'transition-opacity duration-1000 opacity-100' : 'opacity-0'}>
                    <div>
                        {children}
                    </div>
                </main>
            )}
        </LayoutPrincipal>
    );
};
export default LayoutHome;