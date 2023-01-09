import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 70%;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

export const TextArea = styled.textarea`
  width: 70%;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  resize: none;
`;

export const Button = styled.button`
  width: 50%;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;
