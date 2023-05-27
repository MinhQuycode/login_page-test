import React from "react";
import styled from "styled-components";

interface InputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  actionIconRight?: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  iconLeft,
  value,
  iconRight,
  onChange,
  actionIconRight,
}) => {
  return (
    <StyledInput>
      <div className="icon-left">{iconLeft}</div>
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      ></input>
      <div className="icon-right" onClick={actionIconRight}>
        {iconRight}
      </div>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    position: relative;
    padding: 20px 40px;
    outline: none;
    box-sizing: border-box;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    &::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #160202c8;
    }
  }
  .icon-left {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
`;
