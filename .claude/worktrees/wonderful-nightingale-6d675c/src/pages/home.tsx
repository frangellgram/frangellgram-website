import Carousel from '../components/carousel';

interface HomeProps {
    t: any; 
}

export default function Home({ t }: HomeProps) {
    return (
        <div className="page-animate">
            <Carousel />
            <div style={{ padding: '40px', textAlign: 'center', color: 'white' }}>
                {t.inicio_titulo}
            </div>
        </div>
    );
}