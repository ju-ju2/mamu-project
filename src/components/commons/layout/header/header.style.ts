import styled from "@emotion/styled";
import { Modal } from "antd";

interface TitleProps {
  position: number;
}
interface WrapperProps {
  visible: boolean;
  position: number;
}

export const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  /* background-color: ${(props) =>
    props.visible || props.position === 0 ? "transparent" : "#ffffff"};
  opacity: ${(props) => (props.visible ? 0 : 1)}; */
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MyLogin = styled.button`
  width: auto;
  height: 30px;
  padding: 0 1.2rem;
  color: white;
  background: #ff6000;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: black;
  }
`;
export const UserName = styled.div`
  /* text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
  margin-left: 1rem;
  margin-right: 1rem;
  /* color: ${(props) => (props.position ? "#717171" : "white")}; */
  color: #717171;
`;
export const MyModal = styled(Modal)`
  background-color: #ff6000;
`;
