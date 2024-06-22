import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: #797c8a1a;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const CardTitle = styled.h1`
  font-size: var(--Size-Label, 0.875rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Label, 1.375rem); /* 157.143% */
  letter-spacing: -0.0175rem;
  color: #292a2e;
`;

export const CardHashTag = styled.p`
  color: #292a2e80;
  opacity: 0.5;
  font-size: var(--Size-Footnote, 0.75rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Footnote, 1.25rem); /* 166.667% */
  letter-spacing: -0.015rem;
`;

export const RightSection = styled.div`
  gap: 0.125rem;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 0.5rem;
  background-color: #797c8a1f;
  object-fit: cover;
`;
