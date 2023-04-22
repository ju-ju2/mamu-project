import Avvvatars from "avvvatars-react";
import { LoginWrapper, UserName, Wrapper } from "./header.style";
import NarrowButton from "../../../../commons/button/01.orange/narrow";
import Logo from "../../../../commons/logo/01.gray";

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
      <Logo />
      <LoginWrapper>
        {props.isLogin ? (
          <>
            <Avvvatars style="shape" value="hanju" />
            <UserName>한주연님</UserName>
            <NarrowButton onClick={props.onClickLogout} title="로그아웃" />
          </>
        ) : (
          <NarrowButton onClick={props.onClickGoToLogin} title="로그인" />
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
