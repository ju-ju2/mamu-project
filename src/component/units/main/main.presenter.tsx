import { Tag } from "antd";
import * as S from "./main.styles";

export default function MainPageUI() {
  return (
    <S.Container>
      <S.HeadWrapper>
        <S.SearchBar>
          <S.SearchInput placeholder="검색어를 입력하세요." />
          <S.MySearchIcon />
        </S.SearchBar>
        <S.UploadButton>+작품 등록하기</S.UploadButton>
      </S.HeadWrapper>
      <S.ContentsContainer>
        {new Array(15).fill(1).map((el, index) => (
          <S.ContentsWrapper key={index}>
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
