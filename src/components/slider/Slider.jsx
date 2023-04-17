import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  loop: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       initialSlide: 1,
  //     },
  //   },
  // ],
};

const SliderPage = () => {
  return (
    <div
      style={{
        width: '90%',
        margin: '0 auto',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <Slider {...settings}>
        <div>
          <img src="/sofa6.png" alt="" />
        </div>
        <div>
          <img src="/sofa4.png" alt="" />
        </div>
        <div>
          <img src="/sofa5.png" alt="" />
        </div>
        <div>
          <img src="/sofa7.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderPage;
