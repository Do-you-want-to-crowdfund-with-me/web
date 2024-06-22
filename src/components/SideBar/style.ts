import styled from "@emotion/styled";

export const Container = styled.div`
  width: 16.875rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  background-color: #f7f7f7;
  padding: 3rem 1.5rem 0 1.5rem;
`;

export const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.02rem;
`;

export const Manage = styled(MyProfile)``;

export const SideBarButton = styled.button`
  width: 13.875rem;
  height: 3.5rem;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.75rem;

  color: #292a2eb2;
  font-size: var(--Size-Body, 1rem);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-Height-Body, 1.5rem); /* 150% */
  letter-spacing: -0.02rem;
`;

export const Hr = styled.div`
  background-color: #797c8a29;
  width: 13.875rem;
  height: 0.0625rem;
  margin: 0.75rem 0;
`;
