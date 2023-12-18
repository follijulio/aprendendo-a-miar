interface CardProps {
    imageLink: string;
    texto: string;
    rosto?: boolean;
}


const CardImage: React.FC<CardProps> = ({ imageLink, texto, rosto }) => {
    return (
        <div className="border-2 border-sky-500 shadow-md shadow-sky-500 rounded-2xl bg-transparent m-8">
            <div className="h-80 flex justify-center items-center">
                <div className="md:flex flex flex-wrap">
                    <div className="p-4 md:w-1/2 flex justify-center items-center w-full">
                        <img
                            className={rosto? `h-28 w-48 md:h-48 md:w-56 object-cover rounded-lg image-move-efect` : `h-28 w-48 md:h-48 md:w-56 object-cover rounded-lg`}
                            src={imageLink}
                            alt={"miau"}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-white text-lg font-semibold indent-10 p-4 text-justify no-scrollbar overflow-y-auto md:h-full h-40">
                            {texto}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CardImage;