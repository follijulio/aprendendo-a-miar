import Link from "next/link";
import { useState } from "react";

interface CardProps {
  text: string;
  rota?: string;
  foto?: string;
}
const Card: React.FC<CardProps> = ({ text, rota, foto }) => {
  const [mensagem, setMesagem] = useState(false);

  const mouseEnter = () => {
    setMesagem(true);
  };

  const mouseLeave = () => {
    setMesagem(false);
  };
  return (
    <Link className="transition-transform transform-gpu hover:scale-105" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={rota || ""}>
      <div className="border-2 rounded-lg border-sky-400  w-80 h-36 m-5 flex justify-center items-center flex-col">
        <div>
          <img className="h-12" src={foto} alt="" />
        </div>
        <div>
          <span className="text-6xl text-blue-400" id="font-VT323">
            {text}
          </span>
        </div>
        {mensagem ? <p className="text-blue-400 text-center " id="font-VT323">esse botão leva para: {text}</p> : <></>}
      </div>
    </Link>
  );
};
export default Card;