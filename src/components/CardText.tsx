interface CardTextProps {
    text: string
}
const CardText: React.FC<CardTextProps> = ({ text}) => {
    return (
        <section className="border-2 border-[#281077] bg-[#1c0a56] rounded-xl p-4 transition-transform transform-gpu hover:scale-105">
            <p className="text-slate-300 text-justify">{text}</p>
        </section>
    );
};
export default CardText;
