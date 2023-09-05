import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isTemplateExpression } from "typescript";

export default function Carousel() {
  const images = [
    {
      url: "https://i.pinimg.com/564x/d6/9f/12/d69f12a513735eb143dacc1da4981341.jpg",
      id: "img1",
    },
    {
      url: "https://i.pinimg.com/564x/b9/83/d9/b983d93fd1c8abbd33d6d053135d282b.jpg",
      id: "img2",
    },
    {
      url: "https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg",
      id: "img3",
    },
  ];

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <ImgContainer>
                <Img src={image.url} />
              </ImgContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  /* overflow: hidden; */
  background-color: gray;
  transform: translateX(-170px);
`;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
`;
const ImgContainer = styled.section`
  /* margin: 0 16px; */
`;
const Img = styled.img`
  width: 100vw;
  height: 500px;
  /* max-width: 100vw; */
  /* max-height: 100%; */
  object-fit: cover;
`;
