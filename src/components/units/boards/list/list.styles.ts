import { StarFilled } from "@ant-design/icons";
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 30px 0; */
`;
export const ContentsContainer = styled.div`
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
  margin: 0.7rem;
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
