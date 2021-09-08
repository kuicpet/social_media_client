import React from 'react';
import styled from 'styled-components/macro';

export default function Login() {
  return (
    <Wrapper>
      <LoginContainer>
        <LoginRight>
          <h3 className="loginLogo">Logo</h3>
          <span className="loginDesc">
            Connect with friends and the world around you
          </span>
        </LoginRight>
        <LoginLeft>
          <LoginBox>
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="email" className="loginInput" />
            <Button>Log In</Button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="registerBtn">Create a new Account</button>
          </LoginBox>
        </LoginLeft>
      </LoginContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;
const LoginRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .loginLogo {
    font-size: 50px;
    font-weight: 800;
    color: #1775ee;
    margin-bottom: 10px;
  }
  .loginDesc {
    font-size: 24px;
  }
`;
const LoginLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginBox = styled.div`
  height: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .loginInput {
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
    cursor: pointer;
    & :focus {
      outline: none;
    }
  }
  .registerBtn {
    width: 60%;
    align-self: center;
    height: 50px;
    border: 2px solid #1775ee;
    background-color: #fff;
    color: #1775ee;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    & :hover {
      background-color: #1775ee;
      color: white;
    }
  }
  .loginForgot {
    text-align: center;
    color: #1775ee;
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: 50px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  outline: none;
`;
