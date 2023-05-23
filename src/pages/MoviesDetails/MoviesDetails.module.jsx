import styled from '@emotion/styled';

export const GoBackLink = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  a {
    font-size: 22px;
    text-decoration: none;
    position: relative;
    padding-left: 12px;
  }

  a::before {
    content: '<';
    display: block;
    width: 10px;
    height: 10px;
    left: -4px;
    position: absolute;
    margin-top: -12px;
    top: 50%;
  }

  :hover,
  :focus {
    a::before {
      color: white;
    }
  }
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 28px;
`;

export const FilmImg = styled.img`
  max-width: 400px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 22px;
`;

export const FilmDescr = styled.p`
  font-size: 18px;
  color: grey;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;
  color: grey;
  list-style: none;
`;
export const StyledList = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: orange;
  }
  a:active {
    color: red;
  }
`;
