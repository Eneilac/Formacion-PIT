import CarouselImages from '../../components/carousel/Carousel'
import './home.css'


export function Home() {
    return (
        <div className="home">

            <CarouselImages />

            <section className='contenido'>

                <div className="articulo">
                    <img src="./assets/images/articles/1.png" alt="articulo1" />
                </div>

                <div className="articulo">
                <img src="./assets/images/articles/2.png" alt="articulo1" />
                </div>

                <div className="articulo">
                <img src="./assets/images/articles/3.jpg" alt="articulo1" />

                </div>



            </section>
        </div>

    )
}
