import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesCarousel from './ImagesCorusel';

function CarouselImages() {
    return (
        <Carousel style={{margin:'40px'}}>
            <Carousel.Item interval={4000} >
                <ImagesCarousel
                    imageUrl="./assets/images/carousel/1.jpg"
                />
                <Carousel.Caption>
                    <h3>Centro Deportivo la comadreja</h3>
                    <p>Suda solo por dinero</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <ImagesCarousel
                    imageUrl="./assets/images/carousel/2.jpg" 
                />
                <Carousel.Caption>
                    <h3>Centro Deportivo la comadreja</h3>
                    <p>Suda solo por dinero</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <ImagesCarousel
                    imageUrl="./assets/images/carousel/4.jpg"
                />
                <Carousel.Caption>
                    <h3>Centro Deportivo la comadreja</h3>
                    <p>Suda solo por dinero</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImages;