import Bloc from "@/components/Bloc";
import Card from "@/components/CardButton";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
const estudo = [
  {
    img: "https://camo.githubusercontent.com/bdedcbc949feefecc3ff98f7e655ee8151b522e2f32196c648620f5366d909d5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7461696c77696e646373732f7461696c77696e646373732d706c61696e2e737667"
  },
  {
    img: "https://camo.githubusercontent.com/20ffa1c9a31e2c991c8b52b0cb7be938de51db4b7a9299658fef28efb0cc845a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176612f6a6176612d6f726967696e616c2e737667"
  },
  {
    img: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667"
  },
  {
    img: "https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667"
  },
  {
    img: "https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
  },
  {
    img: "https://camo.githubusercontent.com/809a763f1c8f3497709ff0a974bfe7dd11be4dd7a29085645f8e98fbaa4a26e4/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3733322f3733323139302e706e67"
  },
  {
    img: "https://camo.githubusercontent.com/1630c8770b55eef3d164a7eb748dc723884b2e6b922b8c8b3bd96d76f485acee/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f313533322f313533323535362e706e67"
  },
  {
    img: "https://camo.githubusercontent.com/2f6bbff254b68cf9b5da9ecfd6dd81775538c2a9eb20efa22abc8cd9028094d1/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39312f446172742d6c6f676f2d69636f6e2e7376672f3230343870782d446172742d6c6f676f2d69636f6e2e7376672e706e67"
  },
  {
    img: "https://camo.githubusercontent.com/ea5c78321bc6d41bbe950a0dbad3231d3f98c68bca8eec086d1c63c823368530/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f302f30362f4b6f746c696e5f49636f6e2e7376672f3230343870782d4b6f746c696e5f49636f6e2e7376672e706e67"
  },
  {
    img: "https://camo.githubusercontent.com/e22e079fb62ca1cdee848119170182109d8bcef95c9bcfc45314f5e059a3c70d/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3931392f3931393833302e706e67"
  },
]
export { estudo };

const usuario = {
  nome: "Júlio César",
  nickName: "Netuno",
  idade: "16",
  foto: "https://github.com//NETUNO14.png",
  link: "https://github.com//NETUNO14",
  bio: "Estudante de TI no Instituto Federal de Alagoas (IFAL)",
  escola: "IFAL"
};
const telaperfil: React.FC = () => {
  return (
    <LayoutPrincipal navBar={true} foto={false}>
      <main className="p-10">
        <section className="flex flex-wrap justify-around" id="botões">
          <div>
            <Bloc>
              <section>
                <div className="flex justify-center">
                  <img className="h-12 rounded-full m-4" src={usuario.foto} alt="" />
                </div>
                <div className="flex flex-col px-3">
                  <p className="text-4xl text-blue-400" id="font-VT323">
                    Nome:
                  </p>
                  <p className="text-4xl text-blue-400" id="font-VT323">
                    {usuario.nome}
                  </p>
                  <p className="text-4xl text-blue-400" id="font-VT323">
                    idade: {usuario.idade}
                  </p>
                </div>
              </section>
            </Bloc>
          </div>
          <div>
            <Bloc>
              <div className="text-center text-4xl text-blue-400 p-2">
                <p id="font-VT323">Estou estudando</p>
              </div>
              <div className="flex flex-wrap p-4 justify-around">
                {estudo.map((imgs) => {
                  return (
                    <img key={imgs.img} src={imgs.img} className="h-10 m-2" />
                  )
                })}
              </div>
            </Bloc>
          </div>
          <div>
            
          </div>
          <div>
            <Bloc>
              <div className="text-center text-4xl text-blue-400 p-2">
                <p id="font-VT323">{usuario.bio}</p>
              </div>
            </Bloc>
          </div>
        </section>
      </main>
    </LayoutPrincipal>
  );
};
export default telaperfil;
