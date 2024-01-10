import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import isPropValid from "@emotion/is-prop-valid";

import { ReactComponent as Next } from "../../../assets/images/icon-swiper-2.svg";
import { ReactComponent as Prev } from "../../../assets/images/icon-swiper-1.svg";

interface SliderWrapperProps {
  className?: string;
  children: React.ReactNode;
}

// const Div = styled.div`
//   /* width: 30px;
//   height: 30px; */
//   position: absolute;
//   right: 60px;
//   z-index: 99;
//   text-align: right;
//   cursor: pointer;
// `;
// const DivPre = styled.div`
//   /* width: 30px;
//   height: 30px; */
//   position: absolute;
//   left: 30px;
//   z-index: 99;
//   text-align: left;
//   line-height: 30px;
//   cursor: pointer;
// `;
const ImgContainer = styled.section`
  /* margin: 0 16px; */
`;
const Img = styled.img`
  width: 100%;
  height: 31.25rem;
  object-fit: cover;
`;

const Container = styled.div`
  /* width: 100%; */
`;

const settings = {
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  autoplay: true,
  // autoplaySpeed: 5000,
  // nextArrow: (
  //   <Div>
  //     <Next />
  //   </Div>
  // ),
  // prevArrow: (
  //   <DivPre>
  //     <Prev />
  //   </DivPre>
  // ),
};

const FilteredSliderComponent = ({ children, ...props }: any) => (
  <Slider {...props}>{children}</Slider>
);

// const SliderWrapper: React.FC<SliderWrapperProps> = ({
//   className,
//   children,
// }) => (
//   <div className={className}>
//     <Slider {...settings}>{children}</Slider>
//   </div>
// );

const StyledSliderComponent = styled(FilteredSliderComponent).withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "slideCount",
})`
  .slick-slide div {
    outline: none;
  }

  /* 하단 버튼 위치 조정 */
  .slick-dots {
    bottom: 5%;
  }

  /* 버튼 색상 변경 (비활성화) */
  .slick-dots li button:before {
    color: #fefefe;
  }

  /* 버튼 색상 변경 (활성화) */
  .slick-dots li.slick-active button:before {
    color: #000000;
  }

  .slick-prev::before,
  .slick-next::before {
    /* opacity: 0; */
    /* display: none; // display 속성 추가하여 화살표 아이콘 숨김 처리 */
  }
`;

export default function Carousel() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
      id: "img1",
    },
    {
      url: "https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      id: "img2",
    },
    {
      url: "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1660&q=80",
      id: "img3",
    },
  ];

  return (
    <Container>
      <StyledSliderComponent {...settings}>
        {images.map((image) => {
          return (
            <div key={image.id}>
              <ImgContainer>
                <Img src={image.url} />
              </ImgContainer>
            </div>
          );
        })}
      </StyledSliderComponent>
    </Container>
  );
}
