import Navigation from "../../../commons/layout/header/header.container";
import * as S from "./write.styles";
interface IBoardWritePageUIProps {
  onClickUpload: () => void;
}
export default function BoardWritePageUI(props: IBoardWritePageUIProps) {
  return (
    <>
      <Navigation />
      <S.Container>
        <S.Wrapper>
          <S.Title>게시물 등록</S.Title>
          <S.InputTitle>제목</S.InputTitle>
          <S.UploadInput placeholder="제목을 작성해주세요" />
          <S.InputTitle>작품설명</S.InputTitle>
          <S.UploadInput placeholder="제품의 간단한 설명을 작성해주세요" />
          <S.InputTitle>제품 상세 설명</S.InputTitle>
          <S.UploadTextArea placeholder="제품의 상세 설명을 작성해주세요" />
          <S.InputTitle>판매가</S.InputTitle>
          <S.UploadInput placeholder="제품의 판매가격을 작성해주세요" />
          <S.InputTitle>사진첨부</S.InputTitle>
          <S.ImageContainer>
            <S.UploadImageButton>
              <S.ImageText>+</S.ImageText>
              <S.ImageText>upload</S.ImageText>
            </S.UploadImageButton>
            <S.UploadedImageWrapper>
              <S.ImageUploadedBox></S.ImageUploadedBox>
              <S.ImageUploadedBox></S.ImageUploadedBox>
              <S.ImageUploadedBox></S.ImageUploadedBox>
            </S.UploadedImageWrapper>
          </S.ImageContainer>
          <S.UploadButton onClick={props.onClickUpload}>
            등록하기
          </S.UploadButton>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
