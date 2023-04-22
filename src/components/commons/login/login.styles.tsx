import styled from "@emotion/styled";
interface ILoginButtonProps {
  login: string;
}

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
export const LoginButton = styled.button<ILoginButtonProps>`
  width: 400px;
  height: 44px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.login === "login" ? "#ff6000" : "white"};
  border: ${(props) =>
    props.login === "login" ? "none" : "1px solid #ff6000"};
  color: #ffffff;
  color: ${(props) => (props.login === "login" ? "white" : "#ff6000")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
export const Border = styled.div`
  width: 400px;
  border: 0;
  border-top: 1px solid #454545;
  margin-top: 30px;
  margin-bottom: 15px;
`;
export const DivTitle = styled.div`
  width: 95%;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 8px;
`;
