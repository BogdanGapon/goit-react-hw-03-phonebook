import styled from 'styled-components';

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
`;
const LabelInput = styled.label`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
`;
const Button = styled.button`
  display: block;
  padding: 0;
  width: 80px;
  height: 20px;
  margin-top: 10px;

  text-align: center;
  font-size: 12px;
  border-radius: 10%;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 255, 0.3);
  }
`;
export { Form, LabelInput, Button };
