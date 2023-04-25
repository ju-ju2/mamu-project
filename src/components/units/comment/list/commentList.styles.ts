import styled from "@emotion/styled";
import { Rate } from "antd";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;
export const ReviewWrapper = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #d9d9d9;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RateUserWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
`;
export const RateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;
export const UserRateNum = styled.div`
  margin: 0 10px;
  margin-right: auto;
`;

export const IconWrapper = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
export const UserName = styled.div`
  color: #b0b0b0;
  margin-bottom: 5px;
`;
export const CreateAt = styled.div`
  color: #b0b0b0;
  margin-bottom: 15px;
`;
export const Comment = styled.div`
  width: 100%;
  color: #717171;
  margin-bottom: 20px;
`;
export const MyRate = styled(Rate)`
  color: #ff6000;
`;
