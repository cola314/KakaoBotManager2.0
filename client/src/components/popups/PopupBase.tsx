import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

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
  label {
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
  }
`;

const PopupBase = ({ children }: Props) => {
  return (
    <PopupWrapper>
      <PopupBlock>{children}</PopupBlock>
    </PopupWrapper>
  );
};

export default PopupBase;
