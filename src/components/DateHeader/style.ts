import styled from "@emotion/styled";

export const Container = styled.header`
  padding: 1rem 1.5rem;
  width: 73.125rem;
  display: flex;
  gap: 0.75rem;
`;

export const DateWrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.25rem;
`;

export const DateText = styled.div`
  padding: 0.25rem 0.75rem;
  color: #292a2e80;
  opacity: 0.5;
  display: flex;
  justify-content: center;
`;

export const DateButton = styled.button<{ isSelected: boolean }>`
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#5472eb" : "")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#292A2EB2")};

  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
`;
