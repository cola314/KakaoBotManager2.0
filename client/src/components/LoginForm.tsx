import styled from 'styled-components';
import Button from './common/Button';
import TextBoxInput from './common/TextBoxInput';

const LoginFormBlock = styled.form`
  margin: 0 auto;
  margin-top: 11rem;
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }
`;
const StyledTextBoxInput = styled(TextBoxInput)`
  margin-bottom: 1.25rem;
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <h2>KakaoBotManager</h2>
      <StyledTextBoxInput type="text" id="id" placeholder="아이디" />
      <StyledTextBoxInput
        type="password"
        id="password"
        placeholder="비밀번호"
      />
      <Button text="로그인" />
    </LoginFormBlock>
  );
};

export default LoginForm;
