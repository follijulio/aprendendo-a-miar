interface CardProps {
    texto: string;
    link?: string;
}


const Card: React.FC<CardProps> = ({ texto, link }) => {
    return (
        <div>
            {link ?
                <a href={link}>
                    <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
                        <div className="h-40 w-96 p-2 indent-2 text-justify">
                            <p className="text-white">
                                {texto}
                            </p>
                        </div>
                    </div>
                </a>
                :
                <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
                    <div className="h-40 w-96 p-2 indent-2 text-justify">
                        <p className="text-white">
                            {texto}
                        </p>
                    </div>
                </div>
            }
        </div >
    )
};
export default Card;