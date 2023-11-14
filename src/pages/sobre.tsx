import CardText from "@/components/CardText";
import LayoutPrincipal from "@/layouts/PrincipalLayout";
import { text } from "stream/consumers";
const conteudo = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis vitae assumenda quod optio, pariatur quidem cumque necessitatibus dolorum, error doloremque. Aspernatur obcaecati repellendus cumque aliquid natus. Dolores, soluta repellendus?",

    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis vitae assumenda quod optio, pariatur quidem cumque necessitatibus dolorum, error doloremque. Aspernatur obcaecati repellendus cumque aliquid natus. Dolores, soluta repellendus?",
    },
]

const sobre: React.FC = () => {
    return (
        <LayoutPrincipal>
            <div className="m-2 p-2">
            {conteudo.map((cont) => {
                return (
                    <CardText key="miau" text={cont.text}/>
                    )
                })
            }
            </div>
        </LayoutPrincipal>
    );
};
export default sobre;