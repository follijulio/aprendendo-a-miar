import Link from "next/link"
interface navBarProps {
    fotos: boolean;
}
const NavBar: React.FC<navBarProps> = ({ fotos }) => {
    return (
        <nav className="border-4 border-sky-700 h-32 rounded-3xl items-center text-blue-400 p-2 ">
            {fotos ?
                (<div className="text-center">
                    <div className="flex justify-between" id="bloco das imagens">
                        <div>
                            <Link href={"https://github.com/netuno14"}>
                                <img src="http://github.com/netuno14.png" className="object-cover h-14 rounded-full hover:border-2 border-sky-400 transition-transform transform-gpu hover:scale-110" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/netunoPage"}>
                                <img src="https://cdn-icons-png.flaticon.com/512/2530/2530911.png" className="object-cover h-14 rounded-full hover:border-2 border-sky-400 transition-transform transform-gpu hover:scale-110" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="transition-transform transform-gpu hover:scale-105" id="bloco de texto">
                        <Link href={"/home"}>
                            <span id="font-VT323" className="text-6xl">SITE DO JUJU</span>
                        </Link>
                    </div>
                </div>
                ) : (
                    <div className="text-center">
                        <div className="transition-transform transform-gpu hover:scale-105" id="bloco de texto">
                            <Link href={"/home"}>
                                <span id="font-VT323" className="text-6xl">SITE DO JUJU</span>
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
    )
}
export default NavBar;