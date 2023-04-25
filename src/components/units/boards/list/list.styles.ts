import { StarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
export const Container = styled.div`
  width: 100vw;
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
  padding: 0 0.7rem;

  /* margin: 30px 0; */
  @media (min-width: 1800px) {
    width: 1800px;
    height: 8vh;
  }
`;
export const ContentsContainer = styled.div`
  width: 80vw;
  @media (min-width: 1800px) {
    width: 1800px;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
`;
export const ContentsWrapper = styled.div`
  width: 265px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin: 0.7rem;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
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
