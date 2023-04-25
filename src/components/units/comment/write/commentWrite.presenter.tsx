import { useState } from "react";
import * as S from "./commentWrite.styles";

interface ICommentWriteUIPageProps {
  onClickUpload: () => void;
}

export default function CommentWriteUIPage(props: ICommentWriteUIPageProps) {
  const desc = [
    "별로에요🥲",
    "그저그래요😕",
    "보통이에요😗",
    "좋아요🙂",
    "최고에요🥰",
  ];
  const [value, setValue] = useState(0);
  return (
    <S.CommentWrapper>
      <S.InfoWrapper>
        비밀번호 : <S.Password placeholder="비밀번호" type="password" />
        평점 : <S.MyRate tooltips={desc} onChange={setValue} value={value} />
      </S.InfoWrapper>
      <S.Comment
        maxLength={100}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      ></S.Comment>
      <S.UploadWrapper>
        <S.StringNum>0/100</S.StringNum>
        <S.UploadButton onClick={props.onClickUpload}>등록하기</S.UploadButton>
      </S.UploadWrapper>
    </S.CommentWrapper>
  );
}
