interface CardProps {
    children: React.ReactNode;
}


const CardChildren: React.FC<CardProps> = ({children}) => {
    return (
        <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
            <div className="h-40  p-2 indent-2 text-justify ">
                <p className="no-scrollbar overflow-y-auto h-full text-justify text-white">
                    {children}
                </p>
            </div>
        </div>
    )
};
export default CardChildren;