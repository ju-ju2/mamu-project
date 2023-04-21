import styled from "@emotion/styled";
import { Button } from "antd";

export const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  top: 0;
  left: 0; */
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.div`
  font-size: 24px;
  font-family: "mainTitle";
  color: white;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MyLogin = styled(Button)`
  background-color: #ff6000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.div`
  /* text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
  margin-right: 1rem;
  color: white;
`;
