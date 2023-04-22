import { Modal } from "antd";
import * as S from "./signup.styles";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();
  const onClickSignup = () => {
    Modal.info({
      content: "회원가입이 완료되었습니다.",
      okButtonProps: { style: { backgroundColor: "#FF6000" } },
    });
    router.push("/");
  };
  const onClickTitle = () => {
    router.push("/");
  };
  return (
    <S.Container>
      <S.Title onClick={onClickTitle}>mamu</S.Title>
      <S.InputTitle>*email</S.InputTitle>
      <S.Input placeholder="이메일을 입력해주세요" />
      <S.InputTitle>*password</S.InputTitle>
      <S.Input placeholder="비밀번호를 입력해주세요" />
      <S.Input placeholder="비밀번호를 확인해주세요" />
      <S.InputTitle>*nick name</S.InputTitle>
      <S.Input placeholder="닉네임을 입력해주세요" />
      <S.SignupButton onClick={onClickSignup}>회원가입</S.SignupButton>
    </S.Container>
  );
}
