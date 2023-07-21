import Link from "next/link";
import { useState } from "react";

interface CardProps {
    link: string,
    children: React.ReactNode;
    textMensagem: string;
}
const LayoutCard: React.FC<CardProps> = ({ link, children, textMensagem }) => {
    const [mensagem, setMesagem] = useState(false);

    const mouseEnter = () => {
        setMesagem(true);
    };

    const mouseLeave = () => {
        setMesagem(false);
    };
    return (
        <Link onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={link}>
            <div className="border-4 border-sky-700 rounded-3xl h-52 w-96 transition-transform transform-gpu hover:scale-105 shadow-lg hover:shadow-sky-400">
                <div className="justify-center items-center flex-col">
                    {children}
                </div>
                <div className="text-xl font-bold text-center text-blue-400" id="font-VT323">
                    {mensagem ? <p>{textMensagem}</p> : <p>{mensagem}</p>}
                </div>
            </div>

        </Link>)
};
export default LayoutCard;