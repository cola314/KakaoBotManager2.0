import styled from 'styled-components';

type Props = {
  text: string;
};

const StyledButton = styled.button`
  cursor: pointer;
  background: #f7e600;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
`;

const Button = ({ text }: Props) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
