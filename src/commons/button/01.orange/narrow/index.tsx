import styled from "@emotion/styled";

export const CustomButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0 1.5rem;
  color: white;
  background: #ff6000;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: black;
  }
`;
interface INarrowButtonProps {
  title: string;
  onClick?: () => void;
}
export default function NarrowButton(props: INarrowButtonProps) {
  return <CustomButton onClick={props.onClick}>{props.title}</CustomButton>;
}
