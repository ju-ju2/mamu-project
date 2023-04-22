import { SearchOutlined, StarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeadWrapper = styled.div`
  width: 80vw;
  height: 12vh;
  /* background-color: gray; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 30px 0; */
`;
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

export const ContentsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 1.3rem;
`;
export const Image = styled.img`
  width: 265px;
  height: 256px;
  position: relative;
  border-radius: 15px;
  margin-bottom: 0.5rem;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div``;
export const Star = styled(StarFilled)`
  font-size: 14px;
  margin-left: auto;
  margin-right: 0.5rem;
`;
export const Rate = styled.div`
  font-size: 14px;
`;
export const Artist = styled.div`
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 0.5rem;
`;
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
