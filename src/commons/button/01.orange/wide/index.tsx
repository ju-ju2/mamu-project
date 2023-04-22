import styled from "@emotion/styled";
interface IbuttonProps {
  fill: boolean;
}
export const CustomButton = styled.button<IbuttonProps>`
  width: 400px;
  height: 44px;
  border-radius: 15px;
  background-color: ${(props) => (props.fill ? "#ff6000" : "white")};
  border: ${(props) => (props.fill ? "none" : "1px solid #ff6000")};
  color: #ffffff;
  color: ${(props) => (props.fill ? "white" : "#ff6000")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
interface ICustomButtonProps {
  title: string;
  onClick?: () => void;
  fill?: boolean;
}
export default function WideButton(props: ICustomButtonProps) {
  const { title, onClick, fill = true } = props;
  return (
    <CustomButton onClick={onClick} fill={fill}>
      {title}
    </CustomButton>
  );
}
