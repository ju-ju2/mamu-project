import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  background-color: #f3f5f7;
  padding: 0 20px;
`;
export const Title = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
export const AverageRate = styled.div`
  color: #717171;
  margin-left: 15px;
`;
export const DefaultRate = styled.div`
  color: #b0b0b0;
  margin-left: 10px;
`;
export const MyRate = styled(Rate)`
  color: #ff6000;
`;

export default function CommentRateAverage() {
  return (
    <Wrapper>
      <Title>평점</Title>
      <MyRate value={5} disabled />
      <AverageRate>5.0</AverageRate>
      <DefaultRate>/ 5.0</DefaultRate>
    </Wrapper>
  );
}
