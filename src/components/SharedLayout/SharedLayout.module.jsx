import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 25px;
`;

export const NavList = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
`;

export const NavItem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
  }
  a:hover {
    color: orange;
  }
  a:active {
    color: red;
  }
  a:not(:last-child) {
    margin-right: 20px;
  }
`;
