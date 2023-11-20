import LayoutPrincipal from "@/layouts/PrincipalLayout";

const contatosJulio = [
    {
        name: "Linkedin",
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png",
        link: "https://www.linkedin.com/in/júlio-césar-85876b230/"
    },
    {
        name: "Github",
        icon: "",
        link: "https://github.com/folliJulio"
    },
]
export { contatosJulio }


const contatos: React.FC = () => {
    return (
        <LayoutPrincipal>
            <div className="h-full w-full flex justify-center items-center">

            </div>
        </LayoutPrincipal>
    );
};
export default contatos;