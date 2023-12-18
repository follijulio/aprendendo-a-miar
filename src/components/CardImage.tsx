interface CardProps {
    imageLink: string;
    texto: string;
    rosto?: boolean;
}


const CardImage: React.FC<CardProps> = ({ imageLink, texto, rosto }) => {
    return (
        <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
            <div className="h-80 flex justify-center items-center">
                <div className="flex p-4">
                    {rosto ?
                        <img className="h-48 w-56 object-cover rounded-lg image-move-efect" src={imageLink} alt={"miau"} />
                        :
                        <img className="h-48 w-56 object-cover rounded-lg" src={imageLink} alt={"miau"} />
                    }
                    <p className="text-white text-lg font-semibold indent-10 p-4 text-justify no-scrollbar overflow-y-auto h-full">
                        {texto}
                    </p>
                </div>
            </div>
        </div>
    )
};
export default CardImage;