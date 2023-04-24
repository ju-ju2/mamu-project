import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 60px 0;
`;
export const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 1500px) {
    width: 1200px;
  }
`;
export const Title = styled.div`
  font-size: 32px;
  color: #222222;
  margin: 50px 0;
`;
export const InputTitle = styled.div`
  font-size: 16px;
  width: 100%;
  color: #717171;
  margin-bottom: 5px;
`;
export const UploadInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #d9d9d9;
  margin-bottom: 30px;
  padding: 0 15px;
  ::placeholder {
    color: #d9d9d9;
  }
  :focus {
    outline: 1px solid #ff6000;
  }
`;
export const UploadTextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: 1px solid #d9d9d9;
  margin-bottom: 30px;
  padding: 15px;
  ::placeholder {
    color: #d9d9d9;
  }
  :focus {
    outline: 1px solid #ff6000;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;
export const UploadImageButton = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
`;
export const ImageText = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;
export const UploadedImageWrapper = styled.div`
  width: auto;
  border: 1px dashed #d9d9d9;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageUploadedBox = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  margin-right: 15px;
  :last-child {
    margin-right: 0;
  }
`;
export const UploadButton = styled.button`
  width: 119px;
  height: 48px;
  background: #ff6000;
  border: none;
  color: white;
  margin: 30px;
  cursor: pointer;
`;
