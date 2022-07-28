import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/1.png"
          alt="First slide"
          id='imageCoro'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/2.png"
          alt="Second slide"
          id='imageCoro'
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto"
          src="assets/3.png"
          alt="Third slide"
          id='imageCoro'
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;