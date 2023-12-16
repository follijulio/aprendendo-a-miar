interface CardProps {
    texto: string;
}


const Card: React.FC<CardProps> = ({texto}) => {
    return (
        <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
            <div className="h-40  p-2 indent-2 text-justify">
                <p className="text-white">
                    {texto}
                </p>
            </div>
        </div>
    )
};
export default Card;