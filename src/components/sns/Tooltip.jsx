import styled from 'styled-components';

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
  background-color: #f2efe1; //다크모드, 라이트모드 동일
  color: #000000; //다크모드, 라이트모드 동일
  text-align: center;
  border-radius: 6px;
  padding: 4px 6px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  z-index: 1;
  width: max-content;
  font-size: 12px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
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
