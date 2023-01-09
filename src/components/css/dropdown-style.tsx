import styled from "styled-components";

interface DropdownProps {
  open: boolean;
}

export const DropdownContainer = styled.div`
  margin: 0.2rem;
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  color: #444;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 1 rem;
`;

export const DropdownMenu = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: ${(props) => (props.open ? "block" : "none")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border: 1px solid #ddd;
`;

export const DropdownItem = styled.a`
  display: block;
  color: #444;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
