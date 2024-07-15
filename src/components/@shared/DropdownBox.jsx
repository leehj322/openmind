import styled from 'styled-components';

const StyledDropdownListContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? `inline-flex` : `none`)};
  flex-direction: column;
  gap: 8px;

  min-width: ${({ minWidth }) => minWidth};

  background-color: var(--gray10);
  border: 1px solid var(--gray30);
  border-radius: 8px;
  padding: 4px 0;
`;

const StyledItemArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  color: var(--gray50);
  font-size: 14px; // fontSize(xsmall)
  font-weight: 500; // fontWeight(medium)

  &:hover {
    color: var(--blue);
  }

  height: 30px;
  cursor: pointer;
`;

function DropdownBox({ isVisible, minWidth }) {
  return (
    <StyledDropdownListContainer isVisible={isVisible} minWidth={minWidth}>
      <StyledItemArea>이름순</StyledItemArea>
      <StyledItemArea>최신순</StyledItemArea>
    </StyledDropdownListContainer>
  );
}

export default DropdownBox;
