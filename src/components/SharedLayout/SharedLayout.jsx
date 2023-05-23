import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavList, NavItem } from './SharedLayout.module';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link> <Link to="/movies">Movies</Link>
          </NavItem>
        </NavList>
      </header>
      <Suspense fallback={<div>loading page</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
