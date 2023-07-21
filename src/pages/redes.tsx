import CardFeitos from "@/components/CardRedes";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import { redes } from "@/mock/redes";
const feitos: React.FC = () => {
  return (
    <LayoutPrincipal navBar={true} foto={true}>
      <div className="p-10">
        <div className="flex flex-wrap justify-around">
          {redes.map((cards) => {
            return (
              <CardFeitos
                key={cards.icon}
                icon={cards.icon}
                text={cards.text}
                link={cards.link}
                para={cards.para}
              />
            );
          })}
        </div>
      </div>
    </LayoutPrincipal>
  );
};
export default feitos;