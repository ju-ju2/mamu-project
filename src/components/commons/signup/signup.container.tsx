import { Modal } from "antd";
import * as S from "./signup.styles";
import { useRouter } from "next/router";
import WideButton from "../../../commons/button/01.orange/wide";
import WideInput from "../../../commons/input/wide";
import Logo from "../../../commons/logo/01.gray";

export default function SignupPage() {
  const router = useRouter();
  const onClickSignup = () => {
    Modal.info({
      content: "회원가입이 완료되었습니다.",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    router.push("/");
  };

  return (
    <S.Container>
      <Logo />
      <S.GapBox />

      <S.InputTitle>*email</S.InputTitle>
      <WideInput placeholder="이메일을 입력해주세요" />

      <S.InputTitle>*password</S.InputTitle>
      <WideInput placeholder="비밀번호를 입력해주세요" />
      <WideInput placeholder="비밀번호를 확인해주세요" />
      <S.InputTitle>*nick name</S.InputTitle>
      <WideInput placeholder="닉네임을 입력해주세요" />
      <S.GapBox />
      <WideButton onClick={onClickSignup} fill={true} title="회원가입" />
    </S.Container>
  );
}
