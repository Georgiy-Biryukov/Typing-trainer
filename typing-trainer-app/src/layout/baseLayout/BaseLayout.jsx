import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';

import './style.scss';

export const BaseLayout = () => {
  return (
    <div id="wrapper">
      <Header />
      <main id="main">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
