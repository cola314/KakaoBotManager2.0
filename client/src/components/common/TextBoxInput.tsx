import styled from 'styled-components';

const StyledTextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid #888888;
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const TextBoxInput = ({ ...props }) => {
  return <StyledTextInput {...props} />;
};

export default TextBoxInput;
