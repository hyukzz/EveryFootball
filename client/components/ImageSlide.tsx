import Slider from "react-slick";
import styled from "styled-components";

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: true,
    arrows: true,
  };

  const slide_images = [
    "http://www.playdoci.com/images/service/service_img_futsal_pic1.jpg",
    "https://www.uncmc.or.kr/nam_images/facilities/c0202_02.jpg",
    "http://img.itravelgo.co.kr/data/service/8/phpFO2DPm.jpg",
  ];

  return (
    <ImageSlideWrapper>
      <StyledSlider {...settings}>
        {slide_images.map((el, idx) => {
          return (
            <div key={idx}>
              <ProductImg src={el} />
            </div>
          );
        })}
      </StyledSlider>
    </ImageSlideWrapper>
  );
};
export default ImageSlide;

const ImageSlideWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  padding-top: 20px;
`;

const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 10px !important;
    z-index: 1000;
  }

  .slick-next {
    right: 10px !important;
    z-index: 1000;
  }

  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }
`;

const ProductImg = styled.img`
  width: 70%;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  object-fit: cover;
`;
