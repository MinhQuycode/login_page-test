import styled from "styled-components";

interface PropsButton {
  icon?: React.ReactNode;
  title: string;
  bgColor?: string;
  action: () => void;
  disable?: boolean;
}

const Button: React.FC<PropsButton> = ({
  action,
  title,
  icon,
  bgColor,
  disable,
}) => {
  const handleAction = () => {
    if (disable) return;
    action();
  };

  return (
    <StyledButton bgColor={bgColor} onClick={handleAction}>
      {icon} <span>{title}</span>
    </StyledButton>
  );
};

export default Button;

type StyledButtonProps = {
  bgColor?: string;
};

const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  border: 1px solid #cccc;
  cursor: pointer;
  width: ${({ bgColor }) => (bgColor ? "100%" : "50%")};
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ bgColor }) => (bgColor ? "white" : "black")};
  border-radius: 10px;
`;
