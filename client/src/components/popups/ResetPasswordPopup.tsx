import styled from 'styled-components';
import Button from '../common/Button';
import TextBoxInput from '../common/TextBoxInput';

const PopupWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PopupBlock = styled.div`
  background: #f8f8f8;
  width: 30rem;
  padding: 1.5rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const GridForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1rem;
  h4 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  label {
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
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
    <PopupWrapper>
      <PopupBlock>
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
      </PopupBlock>
    </PopupWrapper>
  );
};

export default ResetPasswordPopup;
