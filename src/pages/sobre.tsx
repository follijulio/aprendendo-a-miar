import NavBar from "@/components/NavBar";
import LayoutPrincipal from "@/layouts/PrincipalLayout";

const sobre: React.FC = () => {
    return (
        <LayoutPrincipal>
            <NavBar />
            <div className="text-9xl text-white">
                <p>
                    IN PROGRESS
                </p>
            </div>
        </LayoutPrincipal>
    );
};
export default sobre;
/*{conteudo.map((cont) => {
    return (
        <CardText key="miau" text={cont.text}/>
        )
    })
}*/