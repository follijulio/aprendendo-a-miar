import Link from "next/link";


interface CardTextProps {
    text: string;
    link? : string;
}

const CardText: React.FC<CardTextProps> = ({ text, link}) => {
    return (
        <div>
            {link ?
                <div>
                    <button>
                        <Link href={link ? link : "#"}>
                            <div>
                                <div className="h-52 w-96 border-2 border-sky-200 rounded-lg shadow-md shadow-sky-200 p-3 justify-center text-justify bg-slate-800">
                                    <p className="text-white font-medium font-mono">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </button>
                </div>
                :
                <div>
                    <div className="h-52 w-96 border-2 border-sky-200 rounded-lg shadow-md shadow-sky-200 p-3 justify-center text-justify bg-slate-800">
                        <p className="text-white font-medium font-mono">
                            {text}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};
export default CardText;