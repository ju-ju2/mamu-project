import styled from "@emotion/styled";

export const Container = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 24px;
  font-family: mainTitle;
  text-align: center;
  color: #717171;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 400px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 15px;
  border: 1px solid #454545;
  color: #454545;
  padding: 0 15px;
  margin-bottom: 15px;
`;
export const SignupButton = styled.button`
  width: 400px;
  height: 44px;
  border-radius: 15px;
  background-color: #ff6000;
  border: none;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-top: 50px;
  cursor: pointer;
  :hover {
    background-color: black;
  }
`;
export const InputTitle = styled.div`
  width: 95%;
  font-size: 12px;
  margin-bottom: 8px;
`;
