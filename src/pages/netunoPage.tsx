import CardText from "@/components/CardText";
import LayoutPrincipal from "@/layouts/PrincipalLayout"
import { historia } from "@/mock/netuno";
const netuno: React.FC = () => {
  return (
    <LayoutPrincipal navBar={true} foto={true}>
      {historia.map((historias) => {
        return (
          <div key={historias.id} className="py-2 px-8">
            <CardText
              text={historias.historia}
            />
          </div>
        );
      })}
    </LayoutPrincipal>

  );
};
export default netuno;