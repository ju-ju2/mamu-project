import styled from "@emotion/styled";
import { MouseEvent, useRef, useState } from "react";
import Header from "../../../../commons/layout/header/header.container";
import * as S from "./detail.pc.styles";

interface IBoardDetailPagePCUIProps {
  onClickBuyButton: () => void;
  onClickWishButton: () => void;
}

export default function BoardDetailPagePCUI(props: IBoardDetailPagePCUIProps) {
  const [selectImg, setSelectImg] = useState("/img/shoneyArt.png");
  const imgRef = useRef<HTMLImageElement>(null);
  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    const newSrc = event.currentTarget?.src;
    if (imgRef.current) {
      setSelectImg(newSrc);
    }
  };
  return (
    <>
      <Header />
      <S.HeaderBox />
      <S.Container>
        <S.UpperWrapper>
          <S.ContentsWrapper>
            <S.MainImage ref={imgRef} src={selectImg} />
            <S.InfoWrapper>
              <S.ArtTitle>Blue Man</S.ArtTitle>
              <S.Artist>@shoney</S.Artist>

              <S.Remark>
                제품의 간단한 설명란입니다. 제품의 간단한 설명란입니다. 제품의
                간단한 설명란입니다. 제품의 간단한 설명란입니다. 제품의 간단한
                설명란입니다.
              </S.Remark>

              <S.OptionWrapper>
                <S.OptionTitle>판매가</S.OptionTitle>
                <S.Price>25,000원</S.Price>
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.OptionTitle>상품코드</S.OptionTitle>
                <S.IdNumber>ABDH13578WDX</S.IdNumber>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.OptionTitle>수량</S.OptionTitle>
                <S.ItemQuantity></S.ItemQuantity>
              </S.OptionWrapper>
              <S.TotalPrice>총 삼품금액(수량) : 25000원 (1개)</S.TotalPrice>

              <S.BuyButton onClick={props.onClickBuyButton}>
                BUY IT NOW
              </S.BuyButton>
              <S.WishButton onClick={props.onClickWishButton}>
                ♡ WISH LIST
              </S.WishButton>
            </S.InfoWrapper>
          </S.ContentsWrapper>

          <S.SubImageWrapper>
            <S.SubImage onClick={onClickSubImage} src="/img/shoneyArt.png" />
            <S.SubImage
              onClick={onClickSubImage}
              src="/img/shoneyArtPhonecase.png"
            />
          </S.SubImageWrapper>
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
      </S.Container>
    </>
  );
}
