import LayoutPrincipal from "@/layouts/PrincipalLayout";

const contatosJulio = [
    {
        linkedin:"https://www.linkedin.com/in/júlio-césar-85876b230/"
    },
    {
        github: "https://github.com/folliJulio"
    },
]
export {contatosJulio}


const contatos: React.FC = () => {
    return (
        <LayoutPrincipal>
            <div className="h-full w-full flex justify-center items-center">
                CONTATOS
            </div>
        </LayoutPrincipal>
    );
};
export default contatos;