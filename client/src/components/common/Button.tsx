import styled, { css } from 'styled-components';

export enum ButtonSize {
  FillParent,
  FitContent,
  Standard,
}

type Props = {
  text: string;
  buttonSize?: ButtonSize;
  black?: boolean;
};

const StyledButton = styled.button<{ buttonSize: ButtonSize; black?: boolean }>`
  cursor: pointer;
  background: ${props => (props.black ? '#5e5e5e' : '#f7e600')};
  color: ${props => (props.black ? '#ffffff' : '#000000')};
  font-size: 1rem;
  width: ${props =>
    props.buttonSize === ButtonSize.FillParent
      ? '100%'
      : props.buttonSize === ButtonSize.FitContent
      ? 'fit-content'
      : '7rem'};
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
`;

const Button = ({ text, buttonSize, ...rest }: Props) => {
  return (
    <StyledButton buttonSize={buttonSize ?? ButtonSize.FillParent} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
