import Header from "../../../../commons/layout/header/header.container";
import Slider from "react-slick";
import * as S from "./detail.m.styles";
import Banner from "../../../../commons/layout/banner/banner";
export default function BoardDetailMobilePageUI() {
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
    <>
      <Header />
      <S.Container>
        <S.HeaderBox />
        <S.UpperWrapper>
          <S.MainImage src="/img/shoneyArt.png" />

          <S.InfoWrapper>
            <S.ArtTitle>Blue Man</S.ArtTitle>
            <S.Artist>@shoney</S.Artist>
            <S.Remark>
              제품의 간단한 설명란입니다. 제품의 간단한 설명란입니다.
            </S.Remark>
            <S.OptionWrapper>
              <S.OptionTitle>판매가</S.OptionTitle>
              <S.Price>25,000원</S.Price>
            </S.OptionWrapper>
          </S.InfoWrapper>
        </S.UpperWrapper>
        <S.LowerWrapper>
          <S.PickInfoWrapper>
            <S.PickInfoTitle>작품정보</S.PickInfoTitle>
            <S.PickInfoTitle>작품리뷰</S.PickInfoTitle>
          </S.PickInfoWrapper>
          <S.BorderWrapper>
            <S.PickBorder></S.PickBorder>
            <S.PickBorder></S.PickBorder>
            <S.Border></S.Border>
          </S.BorderWrapper>
        </S.LowerWrapper>
        <S.MobileFooter>
          <S.WishButton>♡</S.WishButton>
          <S.BuyButton>BUY IT NOW</S.BuyButton>
        </S.MobileFooter>
      </S.Container>
    </>
  );
}
