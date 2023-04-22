import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export const Input = styled.input`
  width: 400px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 15px;
  border: 1px solid #454545;
  color: #454545;
  padding: 0 15px;
  margin-bottom: 15px;
`;
interface IWideInputProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function WideInput(props: IWideInputProps) {
  return <Input placeholder={props.placeholder} onChange={props.onChange} />;
}
