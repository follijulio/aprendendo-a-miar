import PerfilCard from "@/components/PerfilCard";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import { usuario } from "@/mock/perfil";
const telaperfil: React.FC = () => {
  return (
    <LayoutPrincipal>
      <div className="p-20">
        <PerfilCard
          nickName={usuario.nickName}
          nome={usuario.nome}
          idade={usuario.idade}
          imageLink={usuario.foto}
          bio={usuario.bio}
          link={usuario.link}
        />
      </div>    
    </LayoutPrincipal>
  );
};
export default telaperfil;
