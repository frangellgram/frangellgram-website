import Carousel from '../components/carousel';
import AboutSection from '../components/AboutSection';

interface HomeProps {
    t: any; 
}

export default function Home({ t }: HomeProps) {
    return (
        <div className="page-animate">
            <Carousel />
            <AboutSection t={t} />

        </div>
    );
}