interface perfilProps {
  nickName: string;
  nome: string;
  imageLink?: string;
  idade: string;
  link: string;
  bio: string;
}

const Perfil: React.FC<perfilProps> = ({
  idade,
  imageLink,
  nickName,
  link,
  bio,
  nome,
}) => {
  return (
    <div className="box-content p-4 border-4 border-[#319FB9] shadow-2xl shadow-[#319FB9] rounded-2xl">
      <div className="flex flex-auto">
        <section className="flex" id="indentition">
          <img
            src={imageLink}
            className="h-72 w-72 -translate-x-14 -translate-y-20 rounded-br-2xl rounded-tl-3xl bg-gray-950 object-cover"
            alt={nickName}
          />
          <p className="-translate-x-10 mt-4 font-sans text-6xl font-bold text-[#319FB9]">
            {nickName}
          </p>
        </section>
        <section className="">
          <div className="ml-48 border-l-2 border-[#319FB9] p-6" id="biograph">
            <span className="font-sans text-6xl font-bold text-[#319FB9]">
              BIO
            </span>
            <p className="text-justify text-2xl">{bio}</p>
          </div>
        </section>
      </div>
      <div>
        <section className="flex">
          <div
            className="justify-between flex flex-col"
            id="others informations"
          >
            <div className="">
              <span className="font-sans text-6xl font-bold">
                Nome:
                <span className="text-[#319FB9]"> {nome}</span>
              </span>
            </div>
            <div>
              <span className="font-sans text-6xl font-bold">
                Idade:
                <span className="text-[#319FB9]"> {idade}</span>
              </span>
            </div>
          </div>
          <a
            href={link}
            className="bg-gradient-to-r from-[#02c3ef]/5 to-[#319FB9]/95 rounded-3xl ml-48 h-18 w-96 flex text-black font-bold text-3xl items-center place-content-center"
          >
            <img
              className="ml-2 h-16"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <div className="ml-4">
              <p>GIT HUB</p>
              <p>{nickName}</p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};
export default Perfil;
/*
 */
