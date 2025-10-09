import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "outlined" | "filled";
}

export const Button = styled.button<ButtonProps>`
  color: #1d1d1d;
  background-color: ${(props) =>
    props.variant === "outlined" ? "transparent" : "#fff"};
  padding: 15px 18px;
  border: 0;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all .25s;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
`;
