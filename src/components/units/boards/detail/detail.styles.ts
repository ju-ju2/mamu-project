import styled from "@emotion/styled";
interface cssProps {
  isDetail?: boolean;
}
export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const LowerWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 110px 0;
  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
`;
export const PickInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PickInfoTitle = styled.div<cssProps>`
  width: 100px;
  font-weight: 700;
  padding: 0 1rem;
  position: relative;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.isDetail ? "#222222" : "#d9d9d9")};
`;
export const BorderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const PickBorder = styled.div<cssProps>`
  width: 100px;
  border-bottom: 2px solid
    ${(props) => (props.isDetail ? "#222222" : "#d9d9d9")};
`;
export const Border = styled.div`
  width: calc(100% - 200px);
  margin-left: auto;
  border-bottom: 2px solid #d9d9d9;
`;
export const ArtDetailScript = styled.div`
  width: 100%;
  margin: 10px 10px;
  @media (max-width: 768px) {
    width: 92%;
  }
`;
