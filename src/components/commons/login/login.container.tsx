import { Modal } from "antd";
import * as S from "./login.styles";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../commons/store";
import WideButton from "../../../commons/button/01.orange/wide";
import WideInput from "../../../commons/input/wide";
import Logo from "../../../commons/logo/01.gray";
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

  return (
    <S.Container>
      <Logo />
      <S.GapBox></S.GapBox>
      <WideInput placeholder="이메일을 입력해주세요" />
      <WideInput placeholder="비밀번호를 입력해주세요" />
      <WideButton onClick={onClickLogin} fill={true} title="로그인" />
      <S.DivTitle>아직 회원이 아니라면?</S.DivTitle>
      <WideButton onClick={onClickSignup} fill={false} title="회원가입" />
      <S.Border></S.Border>
    </S.Container>
  );
}
