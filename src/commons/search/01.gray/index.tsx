import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export const SearchBar = styled.div`
  width: 366px;
  height: 36px;
  border-radius: 15px;
  border: 1px solid #454545;
  color: #454545;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;
export const SearchInput = styled.input`
  width: 70%;
  outline: none;
  border: none;
`;
export const MySearchIcon = styled(SearchOutlined)`
  color: #454545;
  cursor: pointer;
`;

interface ISearchProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search(props: ISearchProps) {
  return (
    <SearchBar>
      <SearchInput placeholder={props.placeholder} onChange={props.onChange} />
      <MySearchIcon />
    </SearchBar>
  );
}
