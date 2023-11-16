import NavBar from "@/components/NavBar";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import CardText from "@/components/CardText";
import { estudo } from "@/mock/estudo";

const test: React.FC = () => {
    return (
        <LayoutPrincipal>
            <div className="gap-y-6 gap-x-6 flex flex-wrap justify-evenly">
                {estudo.map((estudos) => {
                    return (
                        <CardText key={estudos.img} icon={estudos.img} />
                    )
                })}
            </div>
        </LayoutPrincipal>
    );
};
export default test;