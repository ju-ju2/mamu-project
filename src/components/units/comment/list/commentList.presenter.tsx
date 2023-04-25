import Avvvatars from "avvvatars-react";
import * as S from "./commentList.styles";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
interface ICommentListUIPageProps {
  onClickModify: () => void;
  onClickDelete: () => void;
}
export default function CommentListUIPage(props: ICommentListUIPageProps) {
  return (
    <>
      <S.Container>
        {new Array(10).fill(1).map((el, index) => (
          <S.ReviewWrapper key={index}>
            <Avvvatars style="shape" value="abcd" size={50} />
            <S.RateUserWrapper>
              <S.RateWrapper>
                <S.MyRate disabled defaultValue={4} />
                <S.UserRateNum>4.0</S.UserRateNum>
                <S.IconWrapper onClick={props.onClickModify}>
                  <EditOutlined />
                </S.IconWrapper>
                <S.IconWrapper onClick={props.onClickDelete}>
                  <CloseOutlined />
                </S.IconWrapper>
              </S.RateWrapper>
              <S.UserName>userName</S.UserName>
              <S.CreateAt>2023.05.04</S.CreateAt>
              <S.Comment>
                인스타에서 계속 팔로우 하던 작가님이셨는데 마뮤에 굿즈
                판매한다는 소식듣고 바로 구매하러 왔어요! 쇼니님 작품 여기서 더
                보고 싶어요ㅜㅜㅜ인스타에서 계속 팔로우 하던 작가님이셨는데
                마뮤에 굿즈 판매한다는 소식듣고 바로 구매하러 왔어요! 쇼니님
                작품 여기서 더 보고 싶어요ㅜㅜㅜ
              </S.Comment>
            </S.RateUserWrapper>
          </S.ReviewWrapper>
        ))}
      </S.Container>
    </>
  );
}
