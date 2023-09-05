import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as Next } from "../../../assets/images/icon-swiper-2.svg";
import { ReactComponent as Prev } from "../../../assets/images/icon-swiper-1.svg";

export default function Carousel() {
  const images = [
    {
      url: "https://i.pinimg.com/564x/a6/c1/dc/a6c1dcad96c1c3d0e9eaad691d273534.jpg",
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
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",
    nextArrow: (
      <Div>
        <Next />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <Prev />
      </DivPre>
    ),
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
  /* transform: translateX(-170px); */
`;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }

  /* 하단 버튼 위치 조정 */
  .slick-dots {
    bottom: 5%;
  }
  /* 버튼 색상 변경 (비활성화)  */
  .slick-dots li button:before {
    color: #fefefe !important;
  }
  /* 버튼 색상 변경 (활성화)  */
  .slick-dots li.slick-active button:before {
    color: #000000 !important;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  z-index: 99;
  text-align: right;
  /* line-height: 30px; */
  /* vertical-align: middle; */
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 30px;
  z-index: 99;
  text-align: left;
  /* line-height: 30px; */
  /* vertical-align: middle; */
`;
const ImgContainer = styled.section`
  /* margin: 0 16px; */
`;
const Img = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: cover;
`;
