import Card from '@/components/Card';
import CardText from '@/components/CardText';
import LayoutHome from '@/layouts/LayoutHome';
import { textos } from '@/mock/textos';

const Home: React.FC = () => {
    return (
        <LayoutHome durationNav={2100} NavBarActive={true}>
            <div>
                <section id="cards">
                    <div className="gap-y-6 gap-x-6 flex flex-wrap justify-evenly">
                        {textos.map((text) => {
                            return (
                                <Card key={text.titulo} texto={text.text} link={text.link} />
                            )
                        })}
                    </div>
                </section>
            </div>
        </LayoutHome>
    );
};
export default Home;
