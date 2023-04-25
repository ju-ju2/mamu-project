import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;
export const Password = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #d9d9d9;
  outline: none;
  margin: 0 15px;
  padding: 0 10px;
  ::placeholder {
    color: #d9d9d9;
  }
`;
export const MyRate = styled(Rate)`
  margin: 0 10px;
  color: #ff6000;
`;
export const Comment = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #d9d9d9;
  padding: 15px;
  outline: none;
  ::placeholder {
    color: #d9d9d9;
  }
`;
export const UploadWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-top: none;
`;
export const StringNum = styled.div`
  color: #d9d9d9;
  margin-left: 15px;
`;
export const UploadButton = styled.button`
  width: 100px;
  height: 100%;
  cursor: pointer;
  background-color: black;
  color: white;
`;
