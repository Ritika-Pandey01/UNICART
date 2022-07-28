import Carousel from 'react-bootstrap/Carousel';

function CarouselBar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/4.png"
          alt="First slide"
          id='carouselBar'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/5.png"
          alt="Second slide"
          id='carouselBar'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/6.png"
          alt="Third slide"
          id='carouselBar'
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselBar;