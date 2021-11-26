import styled from 'styled-components';
import Button from '../common/Button';
import TextBoxInput from '../common/TextBoxInput';
import PopupBase from './PopupBase';

const GridForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1rem;
  h4 {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
const ErrorMessageBlock = styled.span`
  color: #e74c06;
  grid-column: 1/3;
  margin-top: 1rem;
`;
const ConfirmButton = styled(Button)`
  margin-top: 0.75rem;
  grid-column: 1/3;
`;
const ResetPasswordPopup = () => {
  return (
    <PopupBase>
      <h2>비밀번호 재설정</h2>
      <GridForm>
        <label htmlFor="id">아이디</label>
        <h4>admin</h4>
        <label htmlFor="password">비밀번호 *</label>
        <TextBoxInput placeholder="새 비밀번호" />
        <label htmlFor="confirmPassword">비밀번호 *</label>
        <TextBoxInput placeholder="비밀번호 재입력" />
        <ErrorMessageBlock>
          재설정 이후 변경이 불가능합니다 <br />
          비밀번호 분실시 관리자를 통해서 비밀번호를 <br />
          초기화해야합니다
        </ErrorMessageBlock>
        <ConfirmButton text="확인" />
      </GridForm>
    </PopupBase>
  );
};

export default ResetPasswordPopup;
