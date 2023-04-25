import Header from "../../../../commons/layout/header/header.container";
import * as S from "./detail.m.styles";
export default function BoardDetailMobilePageUI() {
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
        <S.MobileFooter>
          <S.WishButton>♡</S.WishButton>
          <S.BuyButton>BUY IT NOW</S.BuyButton>
        </S.MobileFooter>
      </S.Container>
    </>
  );
}
