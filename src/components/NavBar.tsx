import Link from "next/link";

const NavBar: React.FC = () => {
    return (
        <header className="h-10 w-auto flex justify-between bg-white">
            <div>
                <Link href={"/sobre"}>
                    sobre
                </Link>
            </div>
            <div>
                <Link href={"/projetos"}>
                    projetos
                </Link>
            </div>
            <div>
            <Link href={"/contatos"}>
                    Contatos
                </Link>
            </div>

        </header>
    );
};
export default NavBar;