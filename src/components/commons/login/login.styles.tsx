import styled from "@emotion/styled";

export const Container = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 80%;
  }
`;
export const GapBox = styled.div`
  width: 400px;
  height: 20px;
`;

export const Border = styled.div`
  width: 100%;
  border: 0;
  border-top: 1px solid #454545;
  margin-top: 30px;
  margin-bottom: 15px;
`;
export const DivTitle = styled.div`
  width: 95%;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 8px;
`;
