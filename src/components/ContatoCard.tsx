import Link from "next/link";

interface contatoProps {
    link: string;
    image: string;
    titulo: string;
}
const ContatoCard: React.FC<contatoProps> = ({ image, link, titulo }) => {
    return (
        <Link href={link} className="w-32 h-10 border-sky-400 rounded-md m-2 flex items-center p-2 bg-sky-700 hover:bg-sky-400 duration-500 hover:scale-105">
            <div className="flex items-center w-full justify-between">
                <img src={image} alt={titulo} className="h-4 w-4" />
                <span className="text-sm font-bold font-mono">
                    {titulo}
                </span>
                <div>
                </div>
            </div>
        </Link>
    )
}
export default ContatoCard;