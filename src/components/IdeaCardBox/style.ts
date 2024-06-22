import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 1.25rem;
  border: 0.0625rem solid #797c8a29;
  background-color: #fafafa;
  border-radius: 0.75rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  height: 19.375rem;
  width: 22.70833rem;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 14.125rem;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  font-size: var(--Size-Heading, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Heading, 1.75rem); /* 140% */
  letter-spacing: -0.025rem;
`;
