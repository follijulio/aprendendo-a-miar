interface ContatosProps {
    imagem: string;
    nome: string;
    link: string;
}

const CardContato: React.FC<ContatosProps> = ({ imagem, nome, link }) => {
    return (
        <div className="flex  justify-between h-48 w-full m-2 border-2 rounded-md items-center ">
            <div className="flex justify-center">
                <div className="bg-amber-50 rounded-full m-5">  
                    <img className="h-14 md:h-32 md:w-32 rounded-full m-4 object-cover" src={imagem} alt={nome} />
                </div>
            </div>
            <div className="flex justify-center" >
                <span className="items-center text-2xl md:text-4xl font-semibold text-white space-x-1 uppercase">
                    {nome}
                </span>
            </div>
            <div content="MIAU"></div>
        </div>
    )
};
export default CardContato;