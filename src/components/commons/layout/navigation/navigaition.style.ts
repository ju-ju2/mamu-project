import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: fixed;
  top: 0;
  left: 0; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Title = styled.div`
  font-size: 24px;
  font-family: "mainTitle";
  color: white;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MyLogin = styled.button`
  width: auto;
  height: 30px;
  padding: 0 1.2rem;
  color: white;
  background: #ff6000;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: black;
  }
`;
export const UserName = styled.div`
  /* text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); */
  margin-left: 1rem;
  margin-right: 1rem;
  color: white;
`;
