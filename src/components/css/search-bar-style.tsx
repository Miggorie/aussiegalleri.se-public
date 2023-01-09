import React from "react";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  max-width: 500px;
  border-radius: 4px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
`;

export const SearchBarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #444;

  &:hover {
    color: #222;
  }
`;
