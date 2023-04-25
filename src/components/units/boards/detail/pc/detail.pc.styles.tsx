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
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;

  @media (min-width: 1500px) {
    width: 1200px;
  }
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;
export const MainImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ArtTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 6px;
`;
export const Artist = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #717171;
  margin-bottom: auto;
`;
export const Remark = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #717171;
  margin-bottom: auto;
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
  font-size: 16px;
  font-weight: 700;
  color: #222222;
`;
export const IdNumber = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #717171;
`;
export const ItemQuantity = styled.div`
  width: 100%;
  height: 30px;
  border: 0.5px solid #d9d9d9;
`;
export const TotalPrice = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  text-align: right;
  color: #222222;
  margin: auto 0;
`;
export const BuyButton = styled.button`
  width: 100%;
  height: 55px;
  background-color: #ff6000;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const WishButton = styled.button`
  width: 100%;
  height: 55px;
  background-color: #d9d9d9;
  color: white;
  border: none;
  cursor: pointer;
`;
export const SubImageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const SubImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 15px;
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;
`;

export const LowerWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 110px 0;

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
export const PickInfoTitle = styled.div`
  width: 8%;
  font-weight: 700;
  padding: 0 1rem;
  position: relative;
  margin-bottom: 10px;
`;
export const BorderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const PickBorder = styled.div`
  width: 8%;
  border-bottom: 2px solid #222222;
`;
export const Border = styled.div`
  width: 84%;
  /* position: absolute; */
  border-bottom: 2px solid #d9d9d9;
`;
