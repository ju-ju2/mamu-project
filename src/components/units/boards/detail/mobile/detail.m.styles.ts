import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
`;
export const UpperWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;
// export const ContentsWrapper = styled.div`
//   width: 100%;
//   height: 80vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   margin-bottom: 15px;
// `;

export const MainImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  margin-bottom: 15px;
`;
export const InfoWrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ArtTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 5px;
`;
export const Artist = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #717171;
  margin-bottom: 10px;
`;
export const Remark = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #717171;
  margin-bottom: 10px;
`;
export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;
export const OptionTitle = styled.div`
  width: 25%;
  font-size: 16px;
  font-weight: 500;
  color: #717171;
`;
export const Price = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: #222222;
`;

export const LowerWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 30px 0 110px 0;
  background-color: yellow;
`;
export const PickInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const PickInfoTitle = styled.div`
  width: 100px;
  text-align: center;
  font-weight: 700;
  padding: 0 1rem;
  position: relative;
  margin-bottom: 10px;
`;
export const BorderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const PickBorder = styled.div`
  width: 100px;
  border-bottom: 2px solid #222222;
`;
export const Border = styled.div`
  width: calc(100% - 200px);
  border-bottom: 2px solid #d9d9d9;
`;

export const BuyButton = styled.button`
  width: 88%;
  height: 55px;
  background-color: #ff6000;
  color: white;
  border: none;
  cursor: pointer;
`;

export const WishButton = styled.button`
  width: 10%;
  height: 55px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #222222;
  background: none;
`;

export const MobileFooter = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  height: auto;
  border-top: 1px solid #222222;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 30px 20px;
`;
