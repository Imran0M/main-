import Carousel from 'react-bootstrap/Carousel';
import htmlcss from './Documents/htmlcss.jpg';
import Javascriptcertification from './Documents/Javascriptcertification.jpg';
import Reactjs from './Documents/Reactjs.jpg';
import mongodb from './Documents/mongodb.jpg';
import nodejs from './Documents/nodejs.jpg';
import expressjs from './Documents/expressjs.jpg'
import fswd from './Documents/fswd.jpg';
import './Certification.css';
function Certification() {
  return (
    <section id="certification">
    <div className="certificate-bg">
      <h1 className="certificate-tittle container">Certification</h1>
    <Carousel className="container" >
      <Carousel.Item>
        <img
          className=" w-100 image"
          src={htmlcss}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 image"
          src={Javascriptcertification}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image "
          src={Reactjs}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image "
          src={mongodb}
          alt="fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image "
          src={nodejs}
          alt="fiveth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image "
          src={expressjs}
          alt="sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image "
          src={fswd}
          alt="seventh slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </section>
  );
}

export default Certification;