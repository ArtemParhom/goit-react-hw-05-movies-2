import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  list-style: none;
`;
export const ItemFilms = styled.li`
  font-size: 24px;

  :not(:last-child) {
    margin-bottom: 4px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: orange;
  }
  a:active {
    color: red;
  }
`;
