import Avvvatars from "avvvatars-react";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../../commons/store";
import {
  LoginWrapper,
  MyLogin,
  Title,
  UserName,
  Wrapper,
} from "./navigaition.style";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function Navigation() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickLogout = () => {
    setIsLogin((prev) => !prev);
    Modal.info({ content: "로그아웃 완료" });
    router.push("/");
  };
  return (
    <Wrapper>
      <Title>mamu</Title>
      <LoginWrapper>
        {isLogin ? (
          <>
            <Avvvatars style="shape" value="hanju" />
            <UserName>한주연님</UserName>
            <MyLogin onClick={onClickLogout}>로그아웃</MyLogin>
          </>
        ) : (
          <MyLogin onClick={onClickLogin}>로그인</MyLogin>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
