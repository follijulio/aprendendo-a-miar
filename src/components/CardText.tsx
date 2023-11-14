interface CardTextProps{
    text: String;
}
const CardText: React.FC<CardTextProps> = ({text}) => {
    return (
        <div className="h-52 w-96 border-2 border-sky-300 shadow-2xl shadow-sky-300">
            <p className="text- xl">
                {text}
            </p>
        </div>
    );
};
export default CardText;