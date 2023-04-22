import { Modal } from "antd";
import * as S from "./login.styles";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../commons/store";
export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const onClickLogin = () => {
    Modal.info({
      content: "로그인이 완료되었습니다.",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    setIsLogin(true);
    router.push("/");
  };
  const onClickSignup = () => {
    router.push("/signup");
  };
  const onClickTitle = () => {
    router.push("/");
  };
  return (
    <S.Container>
      <S.Title onClick={onClickTitle}>mamu</S.Title>
      <S.Input placeholder="이메일을 입력해주세요" />
      <S.Input placeholder="비밀번호를 입력해주세요" />
      <S.LoginButton onClick={onClickLogin} login="login">
        로그인
      </S.LoginButton>
      <S.DivTitle>아직 회원이 아니라면?</S.DivTitle>
      <S.LoginButton onClick={onClickSignup} login="signup">
        회원가입
      </S.LoginButton>
      <S.Border></S.Border>
    </S.Container>
  );
}
