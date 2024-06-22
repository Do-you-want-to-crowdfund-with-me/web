import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  width: 73.125rem;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const LayoutHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Date = styled.span`
  font-size: var(--Size-Heading, 1.25rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Heading, 1.75rem); /* 140% */
  letter-spacing: -0.025rem;
  color: #292a2eb2;
`;

export const Text = styled.span`
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: #292a2e;

  font-size: var(--Size-Heading, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: var(--Line-Height-Heading, 1.75rem); /* 140% */
  letter-spacing: -0.025rem;
`;
