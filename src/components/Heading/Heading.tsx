import React from "react";
import styled from "styled-components";

interface HeadingProps {
  text: string;
  fsize: string;
}

const Heading: React.FC<HeadingProps> = ({ text, fsize }) => {
  return <StyledHeading fsize={fsize}>{text}</StyledHeading>;
};

export default Heading;

type StyledHeadingProps = {
  fsize: string;
};

const StyledHeading = styled.h5<StyledHeadingProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  color: black;
`;
