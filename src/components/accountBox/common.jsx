import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: -20px;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  :hover {
    color: #000;
  }
`;

export const Tncbox = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  gap: 20;

  input {
    margin: 8px 0.5rem 0 -2.5rem;
  }

  :hover {
    color: #000;
  }
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgba(120, 7, 7, 255);
  font-weight: 700;
  text-decoration: none;
  margin: 0 4px;
  :hover {
    color: rgba(120, 7, 7, 255);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0px 10px;
  border-radius: 40px;
  margin-bottom: 8px;
  font-size: 15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(120, 7, 7, 255);

  &:hover {
    filter: brightness(1.03);
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
