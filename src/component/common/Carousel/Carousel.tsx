import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 31.25rem;
  object-fit: cover;
`;

const CustomSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-dots {
    bottom: 5%;
  }
  .slick-dots li button:before {
    color: #fff; /* 원하는 비활성화된 dot 색상으로 변경 */
  }

  /* 활성화된 dot 색상 */
  .slick-dots li.slick-active button:before {
    color: #000000; /* 원하는 활성화된 dot 색상으로 변경 */
  }
`;

const Arrow = styled.div`
  font-size: 3.125rem;
  margin: 1.25rem;
  color: var(--grey76);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  transition: color 0.3s ease;
  &:hover {
    color: var(--main-color);
  }
`;

const LeftArrow = styled(Arrow)`
  left: 30px;
`;

const RightArrow = styled(Arrow)`
  right: 30px;
`;

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
    "https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1660&q=80",
  ];

  const settings = {
    dots: true,
    arrows: true, // 화살표를 보이게 함
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 5000,
    autoplay: true,
    nextArrow: <RightArrow>&gt;</RightArrow>,
    prevArrow: <LeftArrow>&lt;</LeftArrow>,
  };

  return (
    <Container>
      <CustomSlider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </CustomSlider>
    </Container>
  );
};

export default Carousel;
