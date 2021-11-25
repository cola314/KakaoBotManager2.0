import styled from 'styled-components';

type Props = {
  text: string;
};

const StyledButton = styled.button`
  cursor: pointer;
  background: #f7e600;
  font-size: 1rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
`;

const Button = ({ text, ...rest }: Props) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default Button;
