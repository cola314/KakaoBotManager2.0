import styled from 'styled-components';

const LoginFormBlock = styled.form`
  margin: 0 auto;
  margin-top: 9rem;
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
  }
`;

const StyledTextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid #888888;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const FormButton = styled.button`
  cursor: pointer;
  background: #f7e600;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <h2>KakaoBotManager</h2>
      <StyledTextInput type="text" id="id" placeholder="아이디" />
      <StyledTextInput type="password" id="id" placeholder="비밀번호" />
      <FormButton>로그인</FormButton>
    </LoginFormBlock>
  );
};

export default LoginForm;
