import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import * as S from "./banner.styles";

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
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.BackgroundDiv>
            <S.BannerTitleWrapper>
              <S.SubTitle>작품이 되다,</S.SubTitle>
              <S.Title>mamu</S.Title>
            </S.BannerTitleWrapper>
          </S.BackgroundDiv>
        </div>
        <div>
          <S.BackgroundDiv></S.BackgroundDiv>
        </div>
        <div>
          <S.BackgroundDiv></S.BackgroundDiv>
        </div>
      </Slider>
    </S.Wrapper>
  );
}
