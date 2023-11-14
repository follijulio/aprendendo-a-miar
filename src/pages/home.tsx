import React, { useState, useEffect } from 'react';
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import { netuno } from '@/mock/netuno';
import NavBar from '@/components/NavBar';

const Home: React.FC = ({ }) => {

    const [time, setTime] = useState(true);
    useEffect(() => {
        const duracao = 2000;
        const cont = setTimeout(() => {
            setTime(false);
        }, duracao);
        return () => clearTimeout(cont);
    }, []);

    return (
        <LayoutPrincipal>
            <nav>
                {time ? <div>
                </div> : <NavBar />}
                <div className="flex justify-center p-6">
                    <img src={netuno.foto} className={time ? 'h-52' : 'rounded-full transition-all duration-1000 h-32'} id="foto-arredondada" />
                </div>
                <div className="flex justify-center">
                    {time ? (
                        <p className="font-bold text-4xl text">
                            BEM VINDO
                        </p>
                    ) : (
                        <div className='font-bold text-4xl'>
                            MEU NOME É NETUNO
                        </div>
                    )}
                </div>
            </nav>
            <main>

            </main>
        </LayoutPrincipal>
    );
};

export default Home;
