import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 100vw;
  height: 70%; */
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: #ff6000;
  }
`;
export const BackgroundImage = styled.img`
  width: 100vw;
  height: 87vh;
  object-fit: cover;
  position: relative;
`;
export const ContentsWrapper = styled.div`
  width: 100vw;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-10%, -50%);
`;
export const SubTitle = styled.div`
  font-size: 2rem;
  color: white;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5);
`;
export const Title = styled.div`
  font-size: 6rem;
  font-family: "mainTitle";
  color: white;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.5);
`;

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <ContentsWrapper>
            <SubTitle>작품이 되다, 마뮤</SubTitle>
            <Title>mamu</Title>
          </ContentsWrapper>
          <BackgroundImage src="/img/mainBanner.webp" />
        </div>
        <div>
          <BackgroundImage src="/img/mainBanner.webp" />
        </div>
      </Slider>
    </Wrapper>
  );
}
