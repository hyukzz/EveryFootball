import Slider from "react-slick";
import styled from "styled-components";

function Carousel() {
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
	return (
		<ProductImgWrap>
			<StyledSlider {...settings}>
				<div>
					<ProductImg src="http://www.playdoci.com/images/service/service_img_futsal_pic1.jpg" />
				</div>
				<div>
					<ProductImg src="https://www.uncmc.or.kr/nam_images/facilities/c0202_02.jpg" />
				</div>
				<div>
					<ProductImg src="http://img.itravelgo.co.kr/data/service/8/phpFO2DPm.jpg" />
				</div>
			</StyledSlider>
		</ProductImgWrap>
	);
}
export default Carousel;

const ProductImgWrap = styled.div`
	width: 50%;
	height: 50%;
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
	width: 100%;
	height: 500px;
	border-radius: 10px;
	object-fit: cover;
`;
