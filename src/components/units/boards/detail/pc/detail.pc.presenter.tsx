import { MouseEvent, RefObject } from "react";
import Header from "../../../../commons/layout/header/header.container";
import * as S from "./detail.pc.styles";
import CommentListPage from "../../../comment/list/commentList.container";
import CommentWritePage from "../../../comment/write/commentWrite.container";
import CommentRateAverage from "../../../comment/average/comment.average";

interface IBoardDetailPagePCUIProps {
  selectImg: string;
  isDetail: boolean;
  imgRef: RefObject<HTMLImageElement>;
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
  onClickBuyButton: () => void;
  onClickWishButton: () => void;
  onClickArtDetail: () => void;
  onClickArtReview: () => void;
}

export default function BoardDetailPagePCUI(props: IBoardDetailPagePCUIProps) {
  return (
    <>
      <Header />
      <S.HeaderBox />
      <S.Container>
        <S.UpperWrapper>
          <S.ContentsWrapper>
            <S.MainImage ref={props.imgRef} src={props.selectImg} />
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
            <S.SubImage
              onClick={props.onClickSubImage}
              src="/img/shoneyArt.png"
            />
            <S.SubImage
              onClick={props.onClickSubImage}
              src="/img/shoneyArtPhonecase.png"
            />
          </S.SubImageWrapper>
        </S.UpperWrapper>
        <S.LowerWrapper>
          <S.PickInfoWrapper>
            <S.PickInfoTitle
              onClick={props.onClickArtDetail}
              isDetail={props.isDetail}
            >
              작품정보
            </S.PickInfoTitle>
            <S.PickInfoTitle
              onClick={props.onClickArtReview}
              isDetail={!props.isDetail}
            >
              댓글
            </S.PickInfoTitle>
          </S.PickInfoWrapper>
          <S.BorderWrapper>
            <S.PickBorder isDetail={props.isDetail}></S.PickBorder>
            <S.PickBorder isDetail={!props.isDetail}></S.PickBorder>
            <S.Border></S.Border>
          </S.BorderWrapper>
          {props.isDetail ? (
            <S.ArtDetailScript>
              제품의 상세 설명란입니다. 제품의 상세 설명란입니다. 제품의 상세
              설명란입니다. 제품의 상세 설명란입니다. 제품의 상세 설명란입니다.
            </S.ArtDetailScript>
          ) : (
            <>
              <CommentRateAverage />
              <CommentWritePage />
              <CommentListPage />
            </>
          )}
        </S.LowerWrapper>
      </S.Container>
    </>
  );
}
