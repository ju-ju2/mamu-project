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
  const onClickLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <Wrapper>
      <Title>mamu</Title>
      <LoginWrapper>
        {isLogin ? (
          <>
            <Avvvatars style="shape" value="hanju" />
            <UserName>한주연님</UserName>
            <MyLogin type="primary" onClick={onClickLogin}>
              로그아웃
            </MyLogin>
          </>
        ) : (
          <MyLogin type="primary" onClick={onClickLogin}>
            로그인
          </MyLogin>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
