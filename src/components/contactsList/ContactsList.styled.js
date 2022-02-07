import styled from 'styled-components';

export const Contacts = styled.ul`
  @media screen and (min-width: 480px) {
    &::-webkit-scrollbar {
      width: 5px;
      background-color: ${({ theme }) => theme.colors.scrollBackground};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.mainBrandColor};
    }
  }
`;

export const ContactsItem = styled.li`
  position: relative;
  display: inline-flex;
  padding: 5px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
  display: flex;
  flex-direction: column;
  min-width: 170px;
`;

export const ContactName = styled.span`
  margin-bottom: 5px;
`;

export const ContactPhone = styled.span`
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const BluredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* background-color: rgba(200, 200, 200, 0.1); */
  backdrop-filter: blur(2px);
`;
