import styled from '@emotion/styled';
export const StyledList = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  font-size: 24px;
  padding: 6px;
  :not(:last-child) {
    margin-bottom: 6px;
  }
  img {
    max-width: 180px;
  }
  span {
    color: grey;
  }
`;
