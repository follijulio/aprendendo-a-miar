interface CardProps {
    texto: string;
    link?: string;
}


const Card: React.FC<CardProps> = ({ texto, link }) => {
    return (
        <div className="border-2 border-sky-500 shadow-md h-40 w-40 shadow-sky-500 rounded-md bg-transparent m-8">
            <div className=" p-2 indent-2 text-justify">
                <p className="text-white">
                    {texto}
                </p>
            </div>
        </div>
    )
};
export default Card;