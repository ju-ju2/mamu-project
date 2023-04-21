import Avvvatars from "avvvatars-react";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../commons/store";
import {
  LoginWrapper,
  MyLogin,
  Title,
  UserName,
  Wrapper,
} from "./navigaition.style";

export default function Navigation() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  return (
    <Wrapper>
      <Title>mamu</Title>
      <LoginWrapper>
        {isLogin ? (
          <>
            <UserName>한주연님</UserName>
            <Avvvatars style="shape" value="hanju" />
          </>
        ) : (
          <MyLogin type="primary">로그인</MyLogin>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
