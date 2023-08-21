import styled from 'styled-components';

export const Form = styled.form`
  width: max-content;
  padding: 25px;
  border: 1px solid pink;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 7px;
  }

  input {
    display: block;
    margin-bottom: 20px;
  }

  button {
    padding: 2px 5px;
    margin-left: 10px;
    background-color: #0c0;
    color: white;
    border: none;
    border-radius: 5px;

    :hover {
      background-color: #0f0;
      color: #f9f;
    }
    :active {
      transform: scale(1.1);
    }
  }
`;
