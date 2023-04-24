import styled from "@emotion/styled";
import { Modal } from "antd";

interface TitleProps {
  position: number;
}
interface WrapperProps {
  visible: boolean;
  position: number;
}
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

export const UserName = styled.div`
  width: auto;
  margin: 0 1rem;
  color: #717171;
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid #222222;
`;
