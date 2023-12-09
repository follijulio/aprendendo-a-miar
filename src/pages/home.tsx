import CardText from '@/components/CardText';
import LayoutHome from '@/layouts/LayoutHome';
import { textos } from '@/mock/textos';

const Home: React.FC = () => {
    return (
        <LayoutHome durationNav={2100}>
            <div>
                <section id="cards">
                    <div className="gap-y-6 gap-x-6 flex flex-wrap justify-evenly">
                        {textos.map((text) => {
                            return (
                                <CardText key={text.titulo} text={text.text} link={text.link} eLink={false} />
                            )
                        })}
                    </div>
                </section>

            </div>
        </LayoutHome>
    );
};
export default Home;
