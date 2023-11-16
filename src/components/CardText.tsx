import Link from "next/link";

interface CardTextProps {
    text?: string;
    icon?: string;
    link?: string;
    eLink?: boolean;
}

const CardText: React.FC<CardTextProps> = ({ text, icon, link, eLink }) => {
    return (
        <div>
            {eLink ? (
                <button>
                    <div className="h-52 w-96 border-2 border-sky-200 rounded-lg shadow-2xl shadow-sky-200 p-3 justify-center text-justify bg-slate-800">
                        <Link href={link ? link : "#"}>
                            <p className="text-white font-medium font-mono">
                                {text}
                            </p>
                        </Link>
                    </div>
                </button>
            ) : (
                <div className="h-52 w-96 border-2 border-sky-200 rounded-lg shadow-md shadow-sky-200 p-3 justify-center text-justify bg-slate-800">
                    <p className="text-white font-medium font-mono">
                        {text}
                    </p>
                </div>
            )}
        </div>
    );
};
export default CardText;