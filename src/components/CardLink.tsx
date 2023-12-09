import { useState, useEffect } from "react";
import Link from "next/link";

interface cardProps {
  link: string;
  text: string;
}

const CardLink: React.FC<cardProps> = ({ link, text }) => {
  const [shadowClass, setShadowClass] = useState("shadow-2xl");

  useEffect(() => {
    // Função para alternar entre diferentes classes de sombra
    const changeShadow = () => {
      const shadows = ["shadow-2xl", "shadow-md", "shadow-lg"];
      let currentIndex = shadows.indexOf(shadowClass);
      currentIndex = (currentIndex + 1) % shadows.length;
      setShadowClass(shadows[currentIndex]);
    };

    // Alterar a sombra a cada 3 segundos (3000 milissegundos)
    const intervalId = setInterval(changeShadow, 3000);

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [shadowClass]);

  return (
    <div>
      <button>
        <Link href={link ? link : "#"}>
          <div
            className={`h-52 w-96 border-2 border-sky-200 rounded-lg ${shadowClass} p-3 justify-center text-justify bg-slate-800`}
          >
            <p className="text-white font-medium font-mono">{text}</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default CardLink;
    