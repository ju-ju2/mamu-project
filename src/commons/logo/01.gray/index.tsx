import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const Title = styled.div`
  font-size: 28px;
  font-family: mainTitle;
  text-align: center;
  color: #717171;
  cursor: pointer;
`;

export default function Logo() {
  const router = useRouter();
  const onClickTitle = () => {
    router.push("/");
  };
  return <Title onClick={onClickTitle}>mamu</Title>;
}
