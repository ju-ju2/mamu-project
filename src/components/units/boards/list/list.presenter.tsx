import { Rate, Tag } from "antd";
import * as S from "./list.styles";
import Search from "../../../../commons/search/01.gray";
// import NarrowButton from "../../../../commons/button/01.orange/narrow";
// interface IMainPageUIProps {
//   onClickUpload: () => void;
//   isScreen: boolean;
// }
interface IBoardListPageUIProps {
  onClickContents: () => void;
}
export default function BoardListPageUI(props: IBoardListPageUIProps) {
  return (
    <S.Container>
      <S.HeadWrapper>
        <Search placeholder="검색어를 입력하세요" />
        {/* {props.isScreen && (
          <NarrowButton onClick={props.onClickUpload} title="+작품 등록하기" />
        )} */}
      </S.HeadWrapper>
      <S.ContentsContainer>
        {new Array(15).fill(1).map((el, index) => (
          <S.ContentsWrapper key={index} onClick={props.onClickContents}>
            <S.Image src="/img/shoneyArt.png" />
            <S.TitleWrapper>
              <S.Title>Blue Man</S.Title>
              <S.Star />
              <S.Rate>5.0</S.Rate>
            </S.TitleWrapper>
            <S.Artist>@Shoney</S.Artist>
            <S.TagWrapper>
              <Tag># 케이스</Tag>
              <Tag># 키링</Tag>
            </S.TagWrapper>
          </S.ContentsWrapper>
        ))}
      </S.ContentsContainer>
    </S.Container>
  );
}
