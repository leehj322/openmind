import styled from "styled-components";

const StyledTooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover > div {
    opacity: 0.9;
    visibility: visible;
  }
`;

const StyledTooltipContent = styled.div`
  position: absolute;
  top: 90%;
  left: 90%;
  background-color: #4d4b4b;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 4px 6px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  z-index: 1;
  width: max-content;
  font-size: 9px;
`;

function Tooltip({ children, content, visible }) {
  return (
    <StyledTooltipContainer>
      {children}
      <StyledTooltipContent visible={visible}>{content}</StyledTooltipContent>
    </StyledTooltipContainer>
  );
}

export default Tooltip;
