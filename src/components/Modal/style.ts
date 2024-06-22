import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(41, 42, 46, 0.16);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  z-index: 1000;
`;

export const Container = styled.div`
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  border: 0;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 1);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(84, 114, 235, 1);
  border-radius: 0.75rem;
`;
