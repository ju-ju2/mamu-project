import Avvvatars from "avvvatars-react";
import {
  LoginWrapper,
  MyLogin,
  Title,
  UserName,
  Wrapper,
} from "./header.style";

interface IHeaderUIProps {
  onClickGotoHome: () => void;
  onClickLogout: () => void;
  onClickGoToLogin: () => void;
  isLogin: boolean;
}

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    // <Wrapper position={position} visible={visible}>
    //   <Title position={position} onClick={onClickGotoHome}>
    <Wrapper>
      <Title onClick={props.onClickGotoHome}>mamu</Title>
      <LoginWrapper>
        {props.isLogin ? (
          <>
            <Avvvatars style="shape" value="hanju" />
            <UserName>한주연님</UserName>
            <MyLogin onClick={props.onClickLogout}>로그아웃</MyLogin>
          </>
        ) : (
          <MyLogin onClick={props.onClickGoToLogin}>로그인</MyLogin>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
