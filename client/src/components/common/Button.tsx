import styled, { css } from 'styled-components';

export enum ButtonSize {
  FillParent,
  FitContent,
  Standard,
}

export enum ButtonColor {
  Yellow,
  Dark,
  Red,
}

type Props = {
  text: string;
  buttonSize?: ButtonSize;
  buttonColor?: ButtonColor;
};
const StyledButton = styled.button<{
  buttonSize: ButtonSize;
  buttonColor: ButtonColor;
}>`
  font-size: 1rem;
  cursor: pointer;
  background: ${props =>
    props.buttonColor === ButtonColor.Dark
      ? '#5e5e5e'
      : props.buttonColor === ButtonColor.Red
      ? '#e74c3c;'
      : '#f7e600'};
  color: ${props =>
    props.buttonColor === ButtonColor.Yellow ? '#000000' : '#ffffff'};
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

const Button = ({ text, buttonSize, buttonColor, ...rest }: Props) => {
  return (
    <StyledButton
      buttonSize={buttonSize ?? ButtonSize.FillParent}
      buttonColor={buttonColor ?? ButtonColor.Yellow}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
