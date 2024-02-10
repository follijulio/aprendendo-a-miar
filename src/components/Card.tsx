interface CardProps {
    texto: string;
    link?: string;
}


const Card: React.FC<CardProps> = ({ texto, link }) => {
    return (
        <div className="border-2 border-sky-900 h-48 w-full rounded-md bg-transparent m-2">
            <div className=" p-2 indent-2 text-justify">
                <p className="text-white">
                    {texto}
                </p>
            </div>
        </div>
    )
};
export default Card;