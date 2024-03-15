import { mavizinha } from "@/mock/mavizinha";
import Image from "next/image";
import mavi01 from "@/assets/imagens/img-mavi-nav.jpg"
import mavi02 from "@/assets/imagens/img-mavi02.jpeg"
import mavi03 from "@/assets/imagens/img-mavi03.jpeg"

const mavi: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-mavi">
            <div className="h-full w-full no-scrollbar overflow-y-scroll">
                <nav className="flex h-20 justify-around items-center">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/381/381804.png" alt="" className="h-8 w-8 object-cover" />
                    </div>
                    <div className="flex justify-around">
                        <h1 className="text-2xl font-sans font-bold">MAVIZINHA</h1>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/381/381804.png" alt="" className="h-8 w-8 object-cover" />
                    </div>
                </nav>
                <main className="">

                    <section id="fotos" className="flex w-full h-20 items-center justify-around">
                        <Image src={mavi01} alt="mavi-01" className="image-move-efect h-14 w-14"></Image>
                        <Image src={mavi02} alt="mavi-01" className="-rotate-90   image-move-efect h-14 w-14"></Image>
                        <Image src={mavi03} alt="mavi-01" className="image-move-efect h-14 w-14"></Image>
                    </section>
                    <section className="flex flex-col justify-center">
                        {mavizinha.map((textinhos) => {
                            return (
                                <div key={textinhos.text} className="border-2 m-2 rounded-md border-pink-400">
                                    <p className="p-2 indent-1 text-justify text-sky-950 font-bold">{textinhos.text}</p>
                                </div>
                            )
                        })}
                    </section>
                    <section className="flex m-4 justify-center">
                        <a href="/teste">
                            <button className="bg-pink-400 text-xl font-semibold h-16 w-32 font-mono rounded-lg hover:shadow-lg hover:shadow-black hover:scale-105 hover:bg-black hover:text-pink-400 ease-in-out duration-200">
                                clique aqui
                            </button>
                        </a>
                    </section>
                    <section>
                    </section>
                </main>
            </div>
        </div>
    )
}
export default mavi;