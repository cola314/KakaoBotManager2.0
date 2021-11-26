import styled from 'styled-components';
import Button, { ButtonColor, ButtonSize } from '../common/Button';
import TextBoxInput from '../common/TextBoxInput';
import PopupBase from './PopupBase';

const AddApplicationForm = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1rem;
`;
const IconSelectBlock = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
`;
const IconPreview = styled.img`
  background: #ffffff;
  width: 128px;
  height: 128px;
  grid-row: 1/3;
`;
const ButtonWrapper = styled.div`
  grid-row-start: 4;
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const AddApplicationPopup = () => {
  return (
    <PopupBase>
      <h2>애플리케이션 추가</h2>
      <AddApplicationForm>
        <label htmlFor="appname">앱 이름</label>
        <TextBoxInput placeholder="애플리케이션 이름" />
        <label htmlFor="icon">아이콘</label>
        <IconSelectBlock>
          <IconPreview alt="이미지" src="_" />
          <Button
            text="파일 선택"
            buttonSize={ButtonSize.FitContent}
            buttonColor={ButtonColor.Dark}
          />
          <span>
            PNG, JPG
            <br />
            128px 크기 권장
          </span>
        </IconSelectBlock>
        <ButtonWrapper>
          <Button
            text="취소"
            buttonSize={ButtonSize.Standard}
            buttonColor={ButtonColor.Dark}
          />
          <Button text="추가" buttonSize={ButtonSize.Standard} />
        </ButtonWrapper>
      </AddApplicationForm>
    </PopupBase>
  );
};

export default AddApplicationPopup;
