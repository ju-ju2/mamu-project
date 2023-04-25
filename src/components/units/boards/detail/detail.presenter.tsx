import BoardDetailMobilePage from "./mobile/detail.m.container";
import BoardDetailPCPage from "./pc/detail.pc.container";
import Header from "../../../commons/layout/header/header.container";
import * as S from "./detail.styles";
import CommentRateAverage from "../../comment/average/comment.average";
import CommentWritePage from "../../comment/write/commentWrite.container";
import CommentListPage from "../../comment/list/commentList.container";
interface IBoardDetailUIPageProps {
  isMobile: boolean;
  isDetail: boolean;
  onClickArtDetail: () => void;
  onClickArtReview: () => void;
}
export default function BoardDetailUIPage(props: IBoardDetailUIPageProps) {
  return (
    <>
      <Header />
      <S.Container>
        {props.isMobile ? <BoardDetailMobilePage /> : <BoardDetailPCPage />}
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
