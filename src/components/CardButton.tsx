import Link from "next/link";

interface CardProps {
  text: string;
  rota?: string;
  foto?: string;
  fora?: string;
}
const Card: React.FC<CardProps> = ({ text, rota, foto, fora }) => {
  return (
    <Link href={rota || "#"}>
      <div className="border-2 rounded-lg border-sky-600 h-40 w-[29.125rem] p-2 m-2">
        <div className="flex justify-center">
          <img className="h-10 rounded-lg" src={foto} />
        </div>
        <p className=" text-4xl text-center">{text}</p>
      </div>
    </Link>
  );
};
export default Card;